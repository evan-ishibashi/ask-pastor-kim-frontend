export interface MessageType {
    sender: "user" | "bot";
    text: string;
    links?: SourceType[];
  }

export interface SourceType {
    url:string,
    content:string
}