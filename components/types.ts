import { Timestamp } from 'firebase/firestore';

export interface Message {
  sender: string;
  content: string;
  time: string;
  imageUrl?: string;
  isRead?: boolean;
  imageUrls?: string[];
}

export interface Chat {
  id: string;
  chatName: string;
  createdAt: Timestamp;
  messages: Message[];
  name: string;
  email: string;
  isAdmin: boolean;
  userId: string;
}
