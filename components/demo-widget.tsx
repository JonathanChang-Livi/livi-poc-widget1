import { Card, CardBody } from "livi-poc-core"
import Image from "next/image"

const DemoWidget = () => {
    return (

        <Card className="bg-primary rounded-lg">
            <CardBody>
                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-col">
                        <Image height={30} width={40} src={'/logo-livi-letter.svg'} alt='' />
                        <p className="text-secondary text-sm font-semibold mt-4">Account Summary: </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-secondary text-xl font-bold">$999,999,999</p>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default DemoWidget