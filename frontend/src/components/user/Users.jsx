import { useMemo } from 'react';
import { useAuth } from '../../hooks/useAuth';
import moment from "moment";

const Users = () => {
  const { user } = useAuth();
  const formattedDate = useMemo(() => {
    return moment(user?.createdAt).format("DD MMMM YYYY");
  }, [user?.createdAt]);
  
  return (
    <div>
      <div className="flex items-center gap-x-3">
        {/* <Link to="/hola">Hola</Link> */}
        <div className="shrink-0 relative">
          {
            user?.image
              ?
              <img className="shrink-0 size-16 rounded-full" src={user?.image} alt="Avatar" />
              :
              <img className="shrink-0 size-16 rounded-full" src="https://media.istockphoto.com/id/1419112611/vector/soft-feather-vector-icon.jpg?s=612x612&w=0&k=20&c=i0cPSoGFFyT-61Yduj-jz5s5yLA7jV4nYbpuXEEcqOE=" alt="Avatar" />
          }
          {
            user?.is_verified ? <span className="absolute top-1 right-1 inline-block rounded-full w-3 h-3 bg-green-600"></span> : <span className="absolute top-1 right-1 inline-block rounded-full w-3 h-3 bg-red-600"></span>
          }
        </div>

        <div className="grow">
          <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
            {user?.name}
          </h1>
          <span className='text-sm'>{`has joined us from ${formattedDate}`}</span>
          <p className="text-sm text-gray-600 dark:text-neutral-400 capitalize">
            {user?.role === 'delivery' ? 'delivery boy' : user?.role}
          </p>
          <p className="text-sm text-gray-600 dark:text-neutral-400 capitalize">
            {user?.mobile}
          </p>
          <p className="text-sm text-gray-600 dark:text-neutral-400 capitalize">
          </p>
        </div>
      </div>

      <div className="mt-8">

        <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
          Currently, I work remotely for Notion, where I design template UIs, convert them into HTML and CSS, and provide comprehensive support to our users. I am passionate about crafting elegant and functional designs that enhance user experiences.
        </p>

        <ul className="mt-5 flex flex-col gap-y-3">
          <li className="flex items-center gap-x-2.5">
            <svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
              {user?.email}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Users
