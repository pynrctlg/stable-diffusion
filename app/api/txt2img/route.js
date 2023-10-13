import { StableDiffusionAPI } from "@/services/api";
import { NextResponse } from "next/server";
import db from '@/util/db';
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

const handler = async (req) => {

  const dbClient = createRouteHandlerClient({ cookies });
  const _db = new db(dbClient);
  const sdApi = new StableDiffusionAPI();

  const currUser = await _db.getCurrentUser();
  const reqBody = {
    key: process.env.SD_APIKEY,
    prompt:
      "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K",
    negative_prompt:
      "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs))",
    width: "512",
    height: "512",
    samples: "1",
    num_inference_steps: "20",
    safety_checker: "no",
    enhance_prompt: "yes",
    seed: null,
    guidance_scale: 7.5,
    webhook: null,
    track_id: null,
  };

  const sdResponse = await sdApi.apiV3Text2imgPost(reqBody);

  const resData = sdResponse.data;

  const insertResponse = await _db._client.from('Requests').insert({
    fetch_id: sdResponse.data.id,
    url: sdResponse.config.url,
    body: reqBody,
    response: resData,
    status: resData.status,
    user_id: currUser?.id
  }).select();


  return NextResponse.json(insertResponse.data, {
    headers: sdResponse.headers,
    status: sdResponse.status,
    statusText: sdResponse.statusText
  });

}

export { handler as GET, handler as POST };