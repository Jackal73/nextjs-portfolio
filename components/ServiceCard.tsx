import {FunctionComponent} from "react";
import {IService} from "../type";

const ServiceCard:FunctionComponent<{service:IService}> = ({
    service:{Icon, about, title},
}) => {

const createMarkup = () => {
    return {
        __html:about
    }

    }
    return (
        <div className="flex items-center p-2 space-x-4">
            <div >
                <Icon className="w-12 h-12 text-green"/>
            </div>
            <div>
                <h5 className="font-extrabold">{title}</h5>
                <p dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    )
}

export default ServiceCard
