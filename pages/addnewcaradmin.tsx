export default function AddNewCar() {
  const fakeCars = [
    {
      Brand: "peugeot",
      Model: "208",
      Type: "city",
      Year: "2020",
      Seats: "5",
      Doors: "5",
      Color: "black",
      Price: "30E",
      Kilometers: "10000",
      Fuel: "essence",
      Plate: "bx-765-gt",
    },
  ];

  return (
    <div className="flex flex-col m-3">
      <h1 className="font-bold text-2xl place-self-center mb-20 mt-10">
        Add new car
      </h1>
      <div className="grid grid-cols-2 gap-0 ">
        <div className="flex flex-col gap-4 ml-20">
          <label className="labeladmin" htmlFor="Brand">
            Brand
            <input className="admininput" type="text" />
          </label>
          <label className="labeladmin" htmlFor="Model">
            Model
            <input className="admininput" type="text" />
          </label>
          <label className="labeladmin" htmlFor="Clutch">
            Clutch
            <input className="admininput" type="text" />
          </label>
          <label className="labeladmin" htmlFor="Type">
            Type
            <input className="admininput" type="text" />
          </label>
          <label className="labeladmin" htmlFor="Year">
            Year
            <input className="admininput" type="text" />
          </label>
          <label className="labeladmin" htmlFor="Seats">
            Seats
            <input className="admininput" type="text" />
          </label>
          <label className="labeladmin" htmlFor="Doors">
            Doors
            <input className="admininput" type="text" />
          </label>
          <label className="labeladmin" htmlFor="Color">
            Color
            <input className="admininput" type="text" />
          </label>
          <label className="labeladmin" htmlFor="Price">
            Price
            <input className="admininput" type="text" />
          </label>
          <label className="labeladmin" htmlFor="Kilometers">
            Kilometers
            <input className="admininput" type="text" />
          </label>
          <label className="labeladmin" htmlFor="Fuel">
            Fuel
            <input className="admininput" type="text" />
          </label>
          <label className="labeladmin" htmlFor="Plate">
            Plate
            <input className="admininput" type="text" />
          </label>
        </div>
        <div className="mr-20">
          <label htmlFor="pics" className="flex flex-col mb-40 mt-5">
            <input className="bg-blue-300" type="file" />
            Pics car
          </label>
          <label className="labeladmin" htmlFor="Description">
            Description
            <textarea className="border border-black h-80 w-full rounded-lg p-2" />
          </label>
        </div>
      </div>

      <div className="place-self-center mb-20 mt-20">
        <button
          type="button"
          className="border border-black bg-blue-700 text-white h-10 w-48 rounded-lg"
        >
          Save car
        </button>
      </div>
    </div>
  );
}
