import { useAuth0 } from "@auth0/auth0-react";
const LogOutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="w-full flex justify-end mt-4">

      <button
        className=" bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700  border-4 text-white py-3 px-4 rounded"
        onClick={() => logout()}
      >
        Sign out
      </button>
      </div>
    )
  );
};
export default LogOutButton;
