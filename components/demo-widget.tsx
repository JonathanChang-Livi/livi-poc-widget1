import { IconEye, IconEyeOff } from "@tabler/icons-react"
import { getCookie } from "cookies-next"
import { Button, Card, CardBody, CardHeader, Title } from "livi-poc-core"
import { useEffect, useState } from "react"

interface CardProps {
    children: React.ReactNode | React.ReactNode[]
}
const BaseCard = ({ children }: CardProps) => {
    return (

        <Card className='flex flex-col rounded-lg filter shadow-lg h-full border border-slate-100' override>
            <CardHeader override
                custom={
                    <div className=" rounded-t-lg bg-slate-200 p-4 flex flex-row justify-between">
                        <Title className="font-black text-primary" override>Account Details</Title>
                        <Title className=" text-blue-600 hover:underline hover:font-bold" override>{`View Account Details >`}</Title>
                    </div>
                }
            />
            <CardBody className="h-full">
                {children}
            </CardBody>
        </Card>
    )
}

interface AccountSummary {
    accNo: string
    accBalance: number
    ledgerBalance: number
    currencies: CurrencyBalance[]
}

interface CurrencyBalance {
    name: string
    code: string
    equ: number
    balance: number
}

const INIT_ACCOUNT_SUMMARY: AccountSummary = {
    accNo: '',
    accBalance: 0,
    ledgerBalance: 0,
    currencies: []
}

const DEMO_ACCOUNT_SUMMARY: AccountSummary = {
    accNo: '388-756-0-12345678',
    accBalance: 3205000,
    ledgerBalance: 3000000,
    currencies: [
        { name: '港幣 HKD', code: 'HKD', balance: 3000000, equ: 3000000 },
        { name: '人民幣 RMB', code: 'RMB', balance: 4820.20, equ: 5000 },
        { name: '美元 USD', code: 'USD', balance: 25477.70, equ: 200000 },
    ]
}

const thousandBitSeparater = (n: number) => {
    var parts = n.toFixed(2).toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
}

const DemoWidget = () => {
    const [showBal, setShowBal] = useState(false)
    const [loading, setLoading] = useState(true)
    const token = getCookie('auth-token')
    const [summary, setSummary] = useState(INIT_ACCOUNT_SUMMARY)

    useEffect(() => {
        if(!token){
            setLoading(false)
            return
        }
        setTimeout(() => {
            setSummary(DEMO_ACCOUNT_SUMMARY)
            setLoading(false)
        }, 3000)
    }, [])

    if(!token){
        return (
            <BaseCard>
                <div className="w-full h-full flex justify-center items-center">
                    <p className="text-4xl text-red-700">WARNING: Unauthorized call</p>
                </div>
            </BaseCard>
        )
    }

    if (loading) {
        return (
            <BaseCard>
                <div role="status" className="animate-pulse w-full flex flex-col justify-between">
                    <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></div>
                    <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
            </BaseCard>
        )
    }
    return (
        <BaseCard>
            <div className="flex flex-col w-full justify-between h-full">
                <div className="flex flex-row justify-between items-center w-full my-2">
                    <p className="text-slate-600">Account Number</p>
                    <p className="text-slate-700 font-black">{summary.accNo}</p>
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
                                thousandBitSeparater(summary.accBalance)
                                    :
                                    '***'
                            }
                        </p>
                    </div>
                    <div className="w-1/2 flex flex-col items-end">
                        <p className="text-slate-600">{'Ledger Balance (HKD Equ.)'}</p>
                        <p className="text-slate-700 font-black mt-2 text-2xl">{thousandBitSeparater(summary.ledgerBalance)}</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 w-full gap-5">
                    {
                        summary.currencies.map((curr) => {
                            return (
                                <div className="w-full bg-slate-200 h-full p-2 rounded-lg">
                                    <div className="flex flex-col h-full justify-around">
                                        <p className="text-slate-600">{curr.name}</p>
                                        <p className="text-slate-700 font-black my-2">{thousandBitSeparater(curr.equ)}</p>
                                        {
                                            curr.code !== 'HKD' ?
                                                <p className="text-slate-600">{`(${thousandBitSeparater(curr.balance)} ${curr.code})`}</p>
                                                : null
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </BaseCard>
    )
}

export default DemoWidget