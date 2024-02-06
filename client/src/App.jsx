function App() {
  return (
    <>
      <div>
        <h1 className=" text-5xl flex text-white">
          Convert Your Currencies Today
        </h1>
        <p className=" py-6 text-white">
          Welcome to "Convert Your Currencies Today"! This application allows
          you to easily convert currencies based on the latest exchange rates.
          Whether you're planning a trip, managing your finances, or simply
          curious about the value of your money in different currencies, this
          tool is here to help.
        </p>
        <div>
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                class="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="repeat-password"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Repeat password
              </label>
              <input
                type="password"
                id="repeat-password"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register new account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
