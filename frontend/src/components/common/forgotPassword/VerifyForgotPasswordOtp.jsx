import { useFormik } from "formik";
import { useAuth } from "../../../hooks/useAuth"
import Text from "../../ui/Text"
import * as yup from 'yup';
import {verifyForgotPasswordOtp } from "../../../api/authAPI";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const VerifyForgotPasswordOtp = () => {
  const { loading } = useAuth();
  const {state} = useLocation();
  const email = state?.email;
  const navigate = useNavigate();
  
useEffect(()=>{
  if(!email) {
    navigate('/forgot-password')
  }
},[email, navigate]);

  const verifySentOtp = async ({otp, email}) => {
    
    const output = await verifyForgotPasswordOtp({token:otp, email});
    if (output?.success) {
      toast.success(output.message);
      navigate('/reset-forgot-password', {state:{email}});
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
      otp: "",
    },
    validationSchema: () =>
      yup.object({
        otp:  yup.string().required("OTP is required")
      }),
    onSubmit: async values => {
      values.email = email;
      verifySentOtp(values);     
    }
  });
  return (
    <div className="max-w-xl w-full mx-auto bg-white border border-gray-200 rounded-xl shadow-2xs">
      {console.log(formik.errors, 'formik')}
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            Fill the OTP below to reset the password for
            <a className="block text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="../examples/html/signin.html">
              {email}
            </a>
          </p>
        </div>

        <div className="mt-5">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-y-4">
                  <Text placeholder="Enter OTP" label="OTP" name="otp" value={formik.values.otp} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.otp} touched={formik.touched.otp} />
                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    {
                      loading ? 'loading...' : 'VERIFY OTP'
                    }
                  </button>     
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default VerifyForgotPasswordOtp
