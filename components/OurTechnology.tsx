
const techInfo = [
    {
        heading: "Starknet Layer 2",
        description: "Built on Starknet for scalable, low-cost transactions and smart contract execution."
    },
    {
        heading: "Smart Contracts",
        description: "Secure, audited smart contracts for escrow, payments and reputation managemnent."
    },
    {
        heading: "AI  integration",
        description: "Advanced matching algorithms to connect the right talent with the right opportunities."
    },
]

const OurTechnology = () => {
    return(
        <section className="  bg-gradient-to-r from-[#083335] via-[#05272B] to-[#05272B] border-[3px] border-[#0F5552] rounded-[6px] p-7  my-5 max-w-[1200px] mx-auto w-full flex flex-col gap-4 items-start justify-center " >

            <h1 className="text-xl font-bold md:text-2xl text-[#EDFCFA]" >
                Our Technology
            </h1>

            <div className="w-full flex flex-col items-start justify-center gap-2 " >

                {techInfo.map((info, index) => (
                    <div key={index} className=" w-full border-l-[3px] border-[#2DD4BF] pl-[1.5%] bg-gradient-to-r from-[#0F524F] via-[#062C30] to-[#05272B] py-3  " >
                        <h2 className="text-lg font-semibold md:text-xl text-[#EDFCFA]" >{info.heading} </h2>
                        <p className=" text-sm md:text-lg text-[#839BAE]" >{info.description} </p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default OurTechnology;