import {getProviders, signIn} from "next-auth/react";
import Header from "../../components/Header";

export default function signin({providers}) {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center space-x-7 mt-20">
        <img className="hidden object-cover rotate-6 md:inline-flex md:w-48" src="https://lanet.click/wp-content/uploads/2020/08/inst-pic5.png" alt="instagram" />
        <div className="">
            {Object.values(providers).map((provider)=>(
                <div key={provider.name} className="flex flex-col items-center">
                    <img className="w-32 object-cover" src="https://cdn2.downdetector.com/static/uploads/logo/Instagram_Logo_Large.png" alt="" />
                    <p className="text-sm italic my-10">This app is created for Learning purposes only</p>
                    <button onClick={()=> signIn(provider.id, {callbackUrl: "/"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}



export async function getServerSideProps(context){
    const providers = await getProviders();
    return {
        props: {providers}
    }
}
