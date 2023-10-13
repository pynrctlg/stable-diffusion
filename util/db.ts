import { SupabaseClient } from '@supabase/auth-helpers-nextjs'

import { Database } from '@/types/supabase';

class DbService {
    _client: SupabaseClient<Database>;

    constructor(client: SupabaseClient<Database>) {
        this._client = client
    }

    getCurrentUser = async () => {

        try {
            return (await this._client.auth.getUser()).data.user;   
        } catch (error) {
            
        }
    }

    getRequests = async () => {
        return await this._client.from('Requests').select().order("id", { ascending: false });
    }
}

export default DbService;