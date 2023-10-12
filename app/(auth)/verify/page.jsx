import Link from "next/link";
const Verify = () => {
  return (
    <div className='w-full bg-secondary h-screen place-content-center place-items-center flex'>
      <div className="text-white text-center">
        <h1 className="text-4xl mb-4">Kaydınız tamamlanmıştır!</h1>
        <p>Kayıt işlemleriniz başarıyla tamamlanmıştır <Link href='/' className="text-primary underline">anasayfa</Link>.</p>
      </div>
    </div>
  )
}

export default Verify