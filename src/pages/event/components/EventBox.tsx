import { AiOutlineRight } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

interface Props {
  title: string;
  subtitle: string;
  calender?: boolean;
}

function EventBox({ title, subtitle, calender }: Props) {
  return (
    <div className="event__box flex justify-between items-center">
      <div className="flex">
        <div className="event__icon bg-neutrals-white-100 flex justify-center items-center">
          {calender ? (
            <BsCalendar3 className="text-primary-purple-light" />
          ) : (
            <GoLocation className="text-primary-purple-light" />
          )}
        </div>
        <div className="ml-5">
          <h1 className="event__box-title text-primary-blue">{title}</h1>
          <p className="event__box-subtitle text-neutrals-gray-400">
            {subtitle}
          </p>
        </div>
      </div>
      <AiOutlineRight
        className="text-neutrals-gray-200"
        width="14px"
        height="7px"
      />
    </div>
  );
}

export default EventBox;
