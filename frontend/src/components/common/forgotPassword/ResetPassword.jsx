import { useFormik } from "formik";
import { useAuth } from "../../../hooks/useAuth"
import * as yup from 'yup';
import { registerPassword } from "../../../helpers/errors";
import { resetPassword } from "../../../api/authAPI";
import { toast } from "react-toastify";
import Password from "../../ui/Password";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ResetPassword = () => {
  const { loading } = useAuth();
  const navigate = useNavigate();
  const {state} = useLocation();

  const email = state?.email;

useEffect(()=>{
  if(!email) {
    navigate('/forgot-password');
  }
},[email, navigate]);

  const updatePassword = async (email, newPassword, confirmPassword) => {
    const output = await resetPassword(email, newPassword, confirmPassword);
    if (output?.success) {
      toast.success(output.message);
      navigate('/login');
    }
    else {
      if(output.status === 0) {
        toast.error(output.message);
        navigate('/forgot-password');
      }
    }
  }
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: ""
    },
    validationSchema: () =>
      yup.object({
        newPassword: registerPassword,
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("newPassword")], "Passwords must match")
          .required("Confirm password required")
      }),
    onSubmit: async values => {
      updatePassword({email, newPassword: values.newPassword, confirmPassword: values.confirmPassword });
    }
  });
  return (
    <div className="max-w-xl w-full mx-auto bg-white border border-gray-200 rounded-xl shadow-2xs">
      {console.log(formik.errors, 'formik')}
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
           Reset Password for
            <a className="block text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="../examples/html/signin.html">
              {email}
            </a>
          </p>
        </div>

        <div className="mt-5">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-y-4">
              <Password label="New Password" name="newPassword" value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.newPassword} touched={formik.touched.newPassword} />
              <Password label="Confirm Password" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.confirmPassword} touched={formik.touched.confirmPassword} />
              <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                {
                  loading ? 'loading...' : 'Reset Password'
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
