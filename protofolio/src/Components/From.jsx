import { UseGoes } from "../Context/GoContext";

export default function Form() {
    let {Contact}=UseGoes();
  return (
    <div ref={Contact} className="bg-gray-800">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center  dark:text-white">
        Contant Me
      </h2>
      <form action={"https://formspree.io/f/mwpgbnvw"} method="POST" className=" w-full max-w-lg mx-auto p-6 rounded-md flex flex-col gap-4">
       

        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-400 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-blue-400"
            />
          </div>
        </div>

        
        <div>
          <label
            htmlFor="message"
            className="block text-sm/6 font-medium text-gray-900 dark:text-white"
          >
            Add your Meassage
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here..."
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-400 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-blue-400"
              defaultValue={""}
            />
          </div>
        </div>

        
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="px-4 py-2 hover:cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
