import Image from "next/image";
import Card from "@/components/Card"

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>

   <Card title="Card 1" description="this is my first card"/>
   <Card title="Card 2" description="this is my second card"/>
   <Card/>
    </>
 
  );
}
