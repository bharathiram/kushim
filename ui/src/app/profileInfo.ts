export class ProfileInfo {
    name: string;
    day: number;
    status: string;
    about: string;
    messages: Message[];
  
    rows: number;
    cols: number;
}
  
export class Message {
    who: string;
    content: string;
}