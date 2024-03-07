import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="p-20 fixed bottom-0 right-0 ">
        <Link href="/chatbot">
          <Button>
            Chatbot
          </Button>
        </Link>
      </div>

      <div className="p-20 flex items-center">
        <Link href="/MyLearning">
          <Button className="bg-transparent border border-black text-black py-2 px-4 rounded-lg pd-8 lg:py-10 lg:px-10 xl:py-10 xl:px-15">
            My Learning
          </Button>
        </Link>
      </div>

      
      <div className="p-20 flex items-center">
        <Link href="/Performance">
          <Button className="bg-transparent border border-black text-black py-2 px-4 rounded-lg pd-20 lg:py-4 lg:px-6 xl:py-10 xl:px-15">
            Performance Hub
          </Button>
        </Link>
      </div>

      <div className="p-20 flex items-center">
        <Link href="/Planner">
          <Button className="bg-transparent border border-black text-black py-2 px-4 rounded-lg pd-20 lg:py-4 lg:px-6 xl:py-10 xl:px-15">
            Daily Planner
          </Button>
        </Link>
      </div>

      <div className="p-20 flex items-center">
        <Link href="/Adventure">
          <Button className="bg-transparent border border-black text-black py-2 px-4 rounded-lg pd-20 lg:py-4 lg:px-6 xl:py-10 xl:px-15">
            Adventure Hub
          </Button>
        </Link>
      </div>

    </div>
    
  )
}
