import { IconEye, IconEyeOff } from "@tabler/icons-react"
import { Button, Card, CardBody, CardHeader, Stack, Title } from "livi-poc-core"
import { useState } from "react"

const DemoWidget = () => {
    const [showBal, setShowBal] = useState(false)
    return (
        <Card className='flex flex-col rounded-lg filter shadow-lg h-full border border-slate-100' override>
            <CardHeader override
                custom={
                    <div className=" rounded-t-lg bg-slate-200 p-4 flex flex-row justify-between">
                        <Title className="font-black" override>Account Details</Title>
                        <Title className=" text-blue-600 hover:underline hover:font-black" override>{`View Account Details >`}</Title>
                    </div>
                }
            />
            <CardBody className="h-full">
                <div className="flex flex-col w-full justify-between h-full">
                    <div className="flex flex-row justify-between items-center w-full my-2">
                        <p className="text-slate-600">Account Number</p>
                        <p className="text-slate-700 font-black">388-756-0-12345678</p>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full my-2">
                        <div className="w-1/2 flex flex-col items-start border-slate-200 border-r-2 pr-4">
                            <div className="flex flex-row w-full items-center">
                                <p className="text-slate-600 mr-2">{'Account Balance (HKD Equ.)'}</p>
                                <Button onClick={() => setShowBal(state => !state)} override>
                                    {
                                        showBal ?
                                            <IconEye size={24} className="text-slate-600" />
                                            :
                                            <IconEyeOff size={24} className="text-slate-600" />
                                    }
                                </Button>
                            </div>
                            <p className="text-slate-700 font-black mt-2 text-2xl">
                                {
                                    showBal ?
                                        '3,205,000'
                                        :
                                        '***'
                                }
                            </p>
                        </div>
                        <div className="w-1/2 flex flex-col items-end">
                            <p className="text-slate-600">{'Account Balance (HKD Equ.)'}</p>
                            <p className="text-slate-700 font-black mt-2 text-2xl">{'3,105,000,000'}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 w-full gap-5">
                        <div className="w-full bg-slate-200 h-full p-2 rounded-lg">
                            <div className="flex flex-col h-full justify-around">
                                <p className="text-slate-600">{'港幣 HKC'}</p>
                                <p className="text-slate-700 font-black my-2">3,000,000</p>
                            </div>
                        </div>
                        <div className="w-full bg-slate-200 h-full p-2 rounded-lg">
                            <div className="flex flex-col h-full justify-around">
                                <p className="text-slate-600">{'人民幣 CNY'}</p>
                                <p className="text-slate-700 font-black my-2">5,000</p>
                                <p className="text-slate-600">{'(4,820.20 CNY)'}</p>
                            </div>
                        </div>
                        <div className="w-full bg-slate-200 h-full p-2 rounded-lg">
                            <div className="flex flex-col h-full justify-around">
                                <p className="text-slate-600">{'美元 USD'}</p>
                                <p className="text-slate-700 font-black my-2">200,000</p>
                                <p className="text-slate-600">{'(25,477.70 USD)'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default DemoWidget