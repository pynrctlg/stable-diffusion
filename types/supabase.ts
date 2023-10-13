export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Requests: {
        Row: {
          body: Json | null
          created_at: string
          fetch_id: string
          id: number
          response: Json | null
          status: string | null
          url: string | null
          user_id: string | null
        }
        Insert: {
          body?: Json | null
          created_at?: string
          fetch_id: string
          id?: number
          response?: Json | null
          status?: string | null
          url?: string | null
          user_id?: string | null
        }
        Update: {
          body?: Json | null
          created_at?: string
          fetch_id?: string
          id?: number
          response?: Json | null
          status?: string | null
          url?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Requests_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
