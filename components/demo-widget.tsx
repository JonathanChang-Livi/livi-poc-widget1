import { Card, CardBody, ComponentProps } from "livi-poc-core"
import Image from "next/image"

const DemoWidget = ({ className, override, style }: ComponentProps) => {
    return (
        <Card className={`${override && override ? '' : 'flex flex-col rounded-lg filter drop-shadow-md bg-primary'} ${className || ''}`} style={style}>
            <CardBody>
                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-col">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.53 51.41" width={40} height={30}><title>logo-livi-letter</title><g id="Group_102" data-name="Group 102"><path id="Path_290" data-name="Path 290" d="M53.34,16.23A2.83,2.83,0,0,0,50,12.4c-.86.19-1.7.39-2.57.54a40.82,40.82,0,0,1-10.59.43,40.06,40.06,0,0,1-5.21-.83,4,4,0,0,0-2.05-.12,2.84,2.84,0,0,0-1.95,3.51,2.69,2.69,0,0,0,.65,1.15,3.36,3.36,0,0,0,1.82.93c.89.21,1.78.39,2.68.54a45.82,45.82,0,0,0,11,.53c.46,0,.93-.07,1.39-.12l-1.58,2.75-2.52,4.36-.58,1c-.7-1.2-1.38-2.41-2.08-3.6A2.84,2.84,0,0,0,33.17,25a3.83,3.83,0,0,0,.64,1.73l1.11,1.93,2.72,4.71a9.05,9.05,0,0,0,.7,1.15,2.87,2.87,0,0,0,4,.41l.09-.08a3.9,3.9,0,0,0,.73-1l.66-1.15,2.35-4.06,2.94-5.1L51.76,19l1.37-2.38A4.11,4.11,0,0,0,53.34,16.23Z" fill="#34ead9"/><path id="Path_291" data-name="Path 291" d="M67.73,3.19a8.71,8.71,0,0,0-12.33,0h0A2.72,2.72,0,0,0,59.2,7.08l0,0a3.3,3.3,0,0,1,4.65,0,2.72,2.72,0,1,0,3.84-3.84Z" fill="#34ead9"/><circle id="Ellipse_14" data-name="Ellipse 14" cx="19.16" cy="4.01" r="3.95" fill="#34ead9"/><path id="Path_292" data-name="Path 292" d="M6.62,31.78V3.31A3.31,3.31,0,0,0,3.31,0H0V31.78C0,43.71,6.62,51.41,16.86,51.41a3.32,3.32,0,0,0,3.32-3.31h0V44.79H16.86C13.78,44.79,6.62,43.53,6.62,31.78Z" fill="#34ead9"/><path id="Path_293" data-name="Path 293" d="M19.16,11.84a3.31,3.31,0,0,0-3.31,3.31h0V32.33a3.31,3.31,0,0,0,3.31,3.31h3.31V15.15A3.31,3.31,0,0,0,19.16,11.84Z" fill="#34ead9"/><path id="Path_294" data-name="Path 294" d="M61.49,11.84a3.31,3.31,0,0,0-3.31,3.31V35.64h3.31a3.31,3.31,0,0,0,3.31-3.31V15.15a3.31,3.31,0,0,0-3.31-3.31Z" fill="#34ead9"/></g></svg>
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