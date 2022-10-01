import { useNavigate } from "react-router-dom";
import Input from "./components/Input";

function CreateEvent() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/event");
  };
  return (
    <main>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <Input id="eName" label="Event Name" type="text" />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <Input id="hName" label="Host Name" type="text" />
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <Input id="sDate" label="Start Date" type="date" />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <Input id="eDate" label="End Date" type="date" />
              </div>
            </div>

            <div className="w-full">
              <Input id="upload" label="Upload Event Photo" type="file" />
            </div>

            <div className="w-full">
              <Input id="location" label="Enter Location" type="text" />
            </div>

            <div>
              <button className="hover:shadow-form rounded-md bg-primary-pink py-3 px-8 text-center text-base font-semibold text-neutrals-white-100 outline-none">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default CreateEvent;
