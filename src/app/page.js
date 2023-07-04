import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <div className="basis-2/3">
        <h1>test</h1>
      </div>
      <div className="basis-1/3 flex justify-center items-center">
        <div className="flex flex-col gap-2">
          <h1>Login</h1>
          <h2>glad you're back !</h2>
          <input className="bg-black text-white border-white border-2 h-10 rounded-lg"></input>
          <input className="bg-black text-white border-white border-2 h-10 rounded-lg"></input>
          
        </div>
      </div>
    </div>
  )
}
