import React from 'react'

const Template = () => {
  return (
    <div>
      <header className="sticky top-0 e33ca flex flex-wrap md:justify-start md:flex-nowrap z-50 bg-white border-bottom-2 border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
        <div className="max-w-[85rem] flex flex-wrap justify-between grid md:grid-cols-5 basis-full items-center w-full mx-auto py-[11px] md:py-0 px-4 sm:px-6 lg:px-8">
          <div className="md:col-span-1 order-1">
            <div className="flex items-center gap-x-1">
              <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden o8t9n" href="../../pro/shop/index.html" aria-label="Preline">
                <svg className="w-28 h-auto" width="116" height="32" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.5696 30.8182V11.3182H37.4474V13.7003H37.6229C37.7952 13.3187 38.0445 12.9309 38.3707 12.5369C38.7031 12.1368 39.134 11.8045 39.6634 11.5398C40.1989 11.2689 40.8636 11.1335 41.6577 11.1335C42.6918 11.1335 43.6458 11.4044 44.5199 11.946C45.3939 12.4815 46.0926 13.291 46.6158 14.3743C47.139 15.4515 47.4006 16.8026 47.4006 18.4276C47.4006 20.0095 47.1451 21.3452 46.6342 22.4347C46.1295 23.518 45.4401 24.3397 44.5661 24.8999C43.6982 25.4538 42.7256 25.7308 41.6484 25.7308C40.8852 25.7308 40.2358 25.6046 39.7003 25.3523C39.1709 25.0999 38.737 24.7829 38.3984 24.4013C38.0599 24.0135 37.8014 23.6226 37.6229 23.2287H37.5028V30.8182H33.5696ZM37.4197 18.4091C37.4197 19.2524 37.5367 19.9879 37.7706 20.6158C38.0045 21.2436 38.343 21.733 38.7862 22.0838C39.2294 22.4285 39.768 22.6009 40.402 22.6009C41.0421 22.6009 41.5838 22.4254 42.027 22.0746C42.4702 21.7176 42.8056 21.2251 43.0334 20.5973C43.2673 19.9633 43.3842 19.2339 43.3842 18.4091C43.3842 17.5904 43.2704 16.8703 43.0426 16.2486C42.8149 15.6269 42.4794 15.1406 42.0362 14.7898C41.593 14.4389 41.0483 14.2635 40.402 14.2635C39.7618 14.2635 39.2202 14.4328 38.777 14.7713C38.34 15.1098 38.0045 15.59 37.7706 16.2116C37.5367 16.8333 37.4197 17.5658 37.4197 18.4091ZM49.2427 25.5V11.3182H53.0559V13.7926H53.2037C53.4622 12.9124 53.8961 12.2476 54.5055 11.7983C55.1149 11.3428 55.8166 11.1151 56.6106 11.1151C56.8076 11.1151 57.02 11.1274 57.2477 11.152C57.4754 11.1766 57.6755 11.2105 57.8478 11.2536V14.7436C57.6632 14.6882 57.4077 14.639 57.0815 14.5959C56.7553 14.5528 56.4567 14.5312 56.1859 14.5312C55.6073 14.5312 55.0903 14.6574 54.6348 14.9098C54.1854 15.156 53.8284 15.5007 53.5638 15.9439C53.3052 16.3871 53.176 16.898 53.176 17.4766V25.5H49.2427ZM64.9043 25.777C63.4455 25.777 62.1898 25.4815 61.1373 24.8906C60.0909 24.2936 59.2845 23.4503 58.7182 22.3608C58.1519 21.2652 57.8688 19.9695 57.8688 18.4737C57.8688 17.0149 58.1519 15.7346 58.7182 14.6328C59.2845 13.531 60.0816 12.6723 61.1096 12.0568C62.1437 11.4413 63.3563 11.1335 64.7474 11.1335C65.683 11.1335 66.5539 11.2843 67.3603 11.5859C68.1728 11.8814 68.8806 12.3277 69.4839 12.9247C70.0932 13.5218 70.5672 14.2727 70.9057 15.1776C71.2443 16.0762 71.4135 17.1288 71.4135 18.3352V19.4155H59.4384V16.978H67.7111C67.7111 16.4117 67.588 15.91 67.3418 15.473C67.0956 15.036 66.754 14.6944 66.317 14.4482C65.8861 14.1958 65.3844 14.0696 64.812 14.0696C64.2149 14.0696 63.6856 14.2081 63.2239 14.4851C62.7684 14.7559 62.4114 15.1222 62.1529 15.5838C61.8944 16.0393 61.762 16.5471 61.7559 17.1072V19.4247C61.7559 20.1264 61.8851 20.7327 62.1437 21.2436C62.4083 21.7545 62.7807 22.1484 63.2608 22.4254C63.741 22.7024 64.3103 22.8409 64.9689 22.8409C65.406 22.8409 65.8061 22.7794 66.1692 22.6562C66.5324 22.5331 66.8432 22.3485 67.1018 22.1023C67.3603 21.8561 67.5572 21.5545 67.6927 21.1974L71.3304 21.4375C71.1458 22.3116 70.7672 23.0748 70.1948 23.7273C69.6285 24.3736 68.896 24.8783 67.9974 25.2415C67.1048 25.5985 66.0738 25.777 64.9043 25.777ZM77.1335 6.59091V25.5H73.2003V6.59091H77.1335ZM79.5043 25.5V11.3182H83.4375V25.5H79.5043ZM81.4801 9.49006C80.8954 9.49006 80.3937 9.29616 79.9752 8.90838C79.5628 8.51444 79.3566 8.04356 79.3566 7.49574C79.3566 6.95407 79.5628 6.48935 79.9752 6.10156C80.3937 5.70762 80.8954 5.51065 81.4801 5.51065C82.0649 5.51065 82.5635 5.70762 82.9759 6.10156C83.3944 6.48935 83.6037 6.95407 83.6037 7.49574C83.6037 8.04356 83.3944 8.51444 82.9759 8.90838C82.5635 9.29616 82.0649 9.49006 81.4801 9.49006ZM89.7415 17.3011V25.5H85.8083V11.3182H89.5569V13.8203H89.723C90.037 12.9955 90.5632 12.343 91.3019 11.8629C92.0405 11.3767 92.9361 11.1335 93.9887 11.1335C94.9735 11.1335 95.8322 11.349 96.5647 11.7798C97.2971 12.2107 97.8665 12.8262 98.2728 13.6264C98.679 14.4205 98.8821 15.3684 98.8821 16.4702V25.5H94.9489V17.1719C94.9551 16.304 94.7335 15.6269 94.2841 15.1406C93.8348 14.6482 93.2162 14.402 92.4283 14.402C91.8989 14.402 91.4311 14.5159 91.0249 14.7436C90.6248 14.9714 90.3109 15.3037 90.0831 15.7408C89.8615 16.1716 89.7477 16.6918 89.7415 17.3011ZM107.665 25.777C106.206 25.777 104.951 25.4815 103.898 24.8906C102.852 24.2936 102.045 23.4503 101.479 22.3608C100.913 21.2652 100.63 19.9695 100.63 18.4737C100.63 17.0149 100.913 15.7346 101.479 14.6328C102.045 13.531 102.842 12.6723 103.87 12.0568C104.905 11.4413 106.117 11.1335 107.508 11.1335C108.444 11.1335 109.315 11.2843 110.121 11.5859C110.934 11.8814 111.641 12.3277 112.245 12.9247C112.854 13.5218 113.328 14.2727 113.667 15.1776C114.005 16.0762 114.174 17.1288 114.174 18.3352V19.4155H102.199V16.978H110.472C110.472 16.4117 110.349 15.91 110.103 15.473C109.856 15.036 109.515 14.6944 109.078 14.4482C108.647 14.1958 108.145 14.0696 107.573 14.0696C106.976 14.0696 106.446 14.2081 105.985 14.4851C105.529 14.7559 105.172 15.1222 104.914 15.5838C104.655 16.0393 104.523 16.5471 104.517 17.1072V19.4247C104.517 20.1264 104.646 20.7327 104.905 21.2436C105.169 21.7545 105.542 22.1484 106.022 22.4254C106.502 22.7024 107.071 22.8409 107.73 22.8409C108.167 22.8409 108.567 22.7794 108.93 22.6562C109.293 22.5331 109.604 22.3485 109.863 22.1023C110.121 21.8561 110.318 21.5545 110.454 21.1974L114.091 21.4375C113.907 22.3116 113.528 23.0748 112.956 23.7273C112.389 24.3736 111.657 24.8783 110.758 25.2415C109.866 25.5985 108.835 25.777 107.665 25.777Z" className="zk148 dark:fill-white" fill="currentColor" />
                  <path d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12" className="i85zm dark:stroke-white" stroke="currentColor" stroke-width="2" />
                  <path d="M5 29.5V16.66C5 12.1534 8.58172 8.5 13 8.5C17.4183 8.5 21 12.1534 21 16.66C21 21.1666 17.4183 24.82 13 24.82H12" className="i85zm dark:stroke-white" stroke="currentColor" stroke-width="2" />
                  <circle cx="13" cy="16.5214" r="5" className="zk148 dark:fill-white" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1 order-2 md:order-3 flex justify-end items-center gap-x-2">
            <div className="flex items-center gap-x-0.5">
              <button type="button" className="inline-flex shrink-0 justify-center items-center gap-x-2 w-[2.375rem] h-[2.375rem] rounded-full text-gray-800 d05xb focus:outline-hidden r17tr dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-shnsm">
                <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>

              <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                <button id="hs-pro-dnnd" type="button" className="relative shrink-0 inline-flex justify-center items-center gap-x-2 w-[2.375rem] h-[2.375rem] rounded-full text-gray-800 d05xb focus:outline-hidden r17tr dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                  <span className="flex absolute top-0 kji94 wzd7f -mt-1 -me-1">
                    <span className="relative bnbld nfrej inline-flex justify-center items-center s91e0 y73k3 kew0r rounded-full eoh5b dark:bg-neutral-200 dark:text-neutral-800">
                      2
                      <span className="et50x">Notifications</span>
                    </span>
                  </span>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full sm:w-96 hidden wzd7f bg-white h5xf1 zry9e border-gray-200 kl2tw j8plm c8g8j poi4v before:absolute before:-top-4 before:start-0 before:w-full before:h-5 dark:bg-neutral-900 dark:border-neutral-700" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-dnnd">
                  <div className="py-4 px-6">
                    <span className="block sikx1 text-gray-800 dark:text-neutral-200">
                      Favorites
                    </span>
                  </div>

                  <div className="px-6 e5283 overflow-y-auto overflow-hidden xwpzv y0qzi bxgd5 n3xnc dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    <div className="space-y-5">
                      <div id="hs-pro-shfdi1" className="hs-removing:opacity-0 duration-300 flex p5sau">
                        <div className="relative">
                          <img className="shrink-0 fl6qw i5kts x1s1r f4yn1 rounded-lg dark:bg-neutral-700" src="https://images.unsplash.com/photo-1627225925683-1da7021732ea?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                        </div>

                        <div className="grow-1 flex flex-col">
                          <h4 className="text-sm text-gray-800 dark:text-neutral-200">
                            Everyday Solid Black T-Shirt
                          </h4>
                          <span className="y18m4">
                            <span className="text-sm jy5gh dark:text-neutral-500">
                              <s>$60</s>
                            </span>
                            <span className="text-sm jmzb2">
                              $40
                            </span>
                          </span>

                          <div className="">
                            <button type="button" className="inline-flex items-center b1nd2 z4zqw text-gray-800 l5oyh underline underline-offset-4 iiod0 focus:outline-hidden s6w37 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400" data-hs-remove-element="#hs-pro-shfdi1">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>

                      <div id="hs-pro-shfdi2" className="hs-removing:opacity-0 duration-300 flex p5sau">
                        <div className="relative">
                          <img className="shrink-0 fl6qw i5kts x1s1r f4yn1 rounded-lg dark:bg-neutral-700" src="https://images.unsplash.com/photo-1699595749116-33a4a869503c?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                        </div>

                        <div className="grow-1 flex flex-col">
                          <h4 className="text-sm text-gray-800 dark:text-neutral-200">
                            Nike Air Force 1
                          </h4>

                          <span className="y18m4 text-sm text-gray-800 dark:text-neutral-200">
                            $139
                          </span>

                          <div className="">
                            <button type="button" className="inline-flex items-center b1nd2 z4zqw text-gray-800 l5oyh underline underline-offset-4 iiod0 focus:outline-hidden s6w37 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400" data-hs-remove-element="#hs-pro-shfdi2">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-4 px-6 dtief">
                    <a className="inline-flex justify-center items-center sikx1 text-sm text-gray-800 l5oyh underline underline-offset-4 ai0xw iiod0 focus:outline-hidden s6w37 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400" href="../../pro/shop/favorites.html">
                      View favorites
                    </a>
                  </div>
                </div>
              </div>

              <button type="button" className="relative shrink-0 inline-flex justify-center items-center gap-x-2 w-[2.375rem] h-[2.375rem] rounded-full text-gray-800 d05xb focus:outline-hidden r17tr dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-shco">
                <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="flex absolute top-0 kji94 wzd7f -mt-1 -me-1">
                  <span className="relative bnbld nfrej inline-flex justify-center items-center s91e0 y73k3 kew0r rounded-full eoh5b dark:bg-neutral-200 dark:text-neutral-800">
                    3
                    <span className="et50x">Notifications</span>
                  </span>
                </span>
              </button>

              <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                <button id="hs-pro-shadnli" type="button" className="relative shrink-0 inline-flex justify-center items-center gap-x-2 w-[2.375rem] h-[2.375rem] rounded-full text-gray-800 d05xb focus:outline-hidden r17tr dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                  <img className="shrink-0 yl1cu rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar" />
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full p2hfx hidden wzd7f bg-white h5xf1 zry9e border-gray-200 kl2tw j8plm c8g8j poi4v before:absolute before:-top-4 before:start-0 before:w-full before:h-5 dark:bg-neutral-900 dark:border-neutral-700" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-shadnli">
                  <div className="an00p">
                    <a className="s53ws sfv8v flex items-center g27d7 rounded-lg d05xb focus:outline-hidden r17tr dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="../../pro/shop/account.html">
                      <img className="shrink-0 fjwwc rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar" />

                      <div className="grow-1">
                        <span className="block sikx1 text-sm text-gray-800 dark:text-neutral-200">
                          James Collins
                        </span>
                        <p className="xs2f2 jy5gh dark:text-neutral-500">
                          jamescollins@site.so
                        </p>
                      </div>
                    </a>

                    <div className="in85y uvd2p kivfg tfa1w dark:bg-neutral-700"></div>

                    <ul className="flex flex-col space-y-0.5">
                      <li>
                        <a className="w-full flex items-center v7oom s53ws sfv8v text-sm text-gray-800 rounded-lg d05xb focus:outline-hidden r17tr dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="../../pro/shop/personal-info.html">
                          <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          Personal Info
                        </a>
                      </li>

                      <li>
                        <a className="w-full flex items-center v7oom s53ws sfv8v text-sm text-gray-800 rounded-lg d05xb focus:outline-hidden r17tr dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="../../pro/shop/my-orders.html">
                          <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                            <path d="M3 6h18" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                          </svg>
                          My Orders
                        </a>
                      </li>

                      <li>
                        <a className="w-full flex items-center v7oom s53ws sfv8v text-sm text-gray-800 rounded-lg d05xb focus:outline-hidden r17tr dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="../../pro/shop/order-details.html">
                          <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                            <path d="M8 7v10" />
                            <path d="M12 7v10" />
                            <path d="M17 7v10" />
                          </svg>
                          Order Details
                        </a>
                      </li>

                      <li>
                        <a className="w-full flex items-center v7oom s53ws sfv8v text-sm text-gray-800 rounded-lg d05xb focus:outline-hidden r17tr dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="../../pro/shop/addresses.html">
                          <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                            <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                            <path d="M18 22v-3" />
                            <circle cx="10" cy="10" r="3" />
                          </svg>
                          Addresses
                        </a>
                      </li>

                      <li>
                        <a className="w-full flex items-center v7oom s53ws sfv8v text-sm text-gray-800 rounded-lg d05xb focus:outline-hidden r17tr dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="../../pro/shop/payment.html">
                          <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <line x1="2" x2="22" y1="10" y2="10" />
                          </svg>
                          Payment
                        </a>
                      </li>

                      <li>
                        <a className="w-full flex items-center v7oom s53ws sfv8v text-sm text-gray-800 rounded-lg d05xb focus:outline-hidden r17tr dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="../../pro/shop/email-newsletter.html">
                          <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                          Email Newsletter
                        </a>
                      </li>
                    </ul>

                    <div className="in85y uvd2p kivfg tfa1w dark:bg-neutral-700"></div>

                    <ul className="flex flex-col space-y-0.5">
                      <li>
                        <a className="w-full flex items-center v7oom s53ws sfv8v text-sm text-gray-800 rounded-lg d05xb focus:outline-hidden r17tr dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="../../pro/shop/gift-cards.html">
                          <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="8" width="18" height="4" rx="1" />
                            <path d="M12 8v13" />
                            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                          </svg>
                          Gift Cards
                        </a>
                      </li>

                      <li>
                        <a className="w-full flex items-center v7oom s53ws sfv8v text-sm text-gray-800 rounded-lg d05xb focus:outline-hidden r17tr dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="../../pro/shop/returns-and-refunds.html">
                          <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                            <path d="M3 3v5h5" />
                          </svg>
                          Returns &amp; Refunds
                        </a>
                      </li>
                    </ul>

                    <div className="in85y uvd2p kivfg tfa1w dark:bg-neutral-700"></div>

                    <p>
                      <button type="button" className="w-full flex items-center v7oom s53ws sfv8v text-sm text-gray-800 rounded-lg d05xb k6psp focus:outline-hidden r17tr zkomi dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-red-500 dark:focus:text-red-500">
                        <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                          <polyline points="16 17 21 12 16 7" />
                          <line x1="21" x2="9" y1="12" y2="12" />
                        </svg>
                        Logout
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <button type="button" className="bu4xv r44ox inline-flex justify-center items-center gap-x-2 text-sm sikx1 rounded-lg rsdjd border-gray-200 bg-white text-gray-800 hj07t nzmya disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden d16zw dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-pro-dmh-collapse" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-pro-dmh" aria-label="Toggle navigation" data-hs-overlay="#hs-pro-dmh" data-hs-overlay-options='{
                "moveOverlayToBody": 767
              }'>
                <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>
          </div>

          <div className="md:col-span-3 order-3 md:order-2 basis-full grow-1 md:basis-auto md:grow-0">
            <div id="hs-pro-dmh" className="hs-overlay hs-overlay-open:translate-x-0 [--auto-close:md]
            -translate-x-full md:translate-none transition-all duration-300 ease-in-out duration-300 h587a
            w-full h-full sm:w-96 bg-white
            hidden
            fixed top-0 left-0 z-[60]
            md:static md:block md:h-auto md:w-full md:transition-none md:transform-none z-40
            dark:bg-neutral-800 md:dark:bg-neutral-900" role="dialog" tabindex="-1" aria-label="Sidebar" data-hs-overlay-close-on-resize>
              <div className="overflow-hidden overflow-y-auto h-full xwpzv y0qzi bxgd5 n3xnc dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div className="py-3 px-6 md:hidden flex justify-between items-center border-bottom-2 border-gray-200 dark:border-neutral-700">
                  <h3 className="sikx1 text-gray-800 dark:text-neutral-200">
                    Menu
                  </h3>
                  <button type="button" className="od5va jxswk inline-flex justify-center items-center gap-x-1 rounded-full rsdjd border-gray-200 xs2f2 text-gray-800 d05xb focus:outline-hidden r17tr disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:focus:bg-neutral-700" aria-label="Close" data-hs-overlay="#hs-pro-dmh">
                    <span className="hidden lg:block">Esc</span>
                    <span className="block lg:hidden">Close</span>
                    <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>

                <div className="md:flex p6601 md:items-center py-4 px-6 p-0">
                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--auto-close:inside] md:inline-block">
                    <button id="hs-pro-shnnd6" type="button" className="hs-dropdown-toggle py-3 md:py-5 md:px-4 lg:px-5 w-full md:w-auto flex items-center text-sm text-start text-gray-800 rounded-lg underline underline-offset-4 f1348 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden ow4j6 dark:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                      <span className="relative">
                        Pages
                        <span className="absolute -top-1 -end-2">
                          <span className="relative flex">
                            <span className="baj5e absolute inline-flex w-full h-full rounded-full ofm71 y1afu dark:bg-indigo-600"></span>
                            <span className="relative inline-flex rounded-full s4l24 s63ue"></span>
                            <span className="et50x">Current</span>
                          </span>
                        </span>
                      </span>
                      <svg className="md:hidden hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 ms-auto lbtf0 shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>

                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--auto-close:inside] md:inline-block">
                    <button id="hs-pro-shnnd1" type="button" className="hs-dropdown-toggle py-3 md:py-5 md:px-4 lg:px-5 w-full md:w-auto flex items-center text-sm text-start text-gray-800 rounded-lg underline underline-offset-4 f1348 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden ow4j6 dark:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                      Men
                      <svg className="md:hidden hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 ms-auto lbtf0 shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>

                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--auto-close:inside] md:inline-block">
                    <button id="hs-pro-shnnd2" type="button" className="hs-dropdown-toggle py-3 md:py-5 md:px-4 lg:px-5 w-full md:w-auto flex items-center text-sm text-start text-gray-800 rounded-lg underline underline-offset-4 f1348 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden ow4j6 dark:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                      Women
                      <svg className="md:hidden hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 ms-auto lbtf0 shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                  </div>

                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--auto-close:inside] md:inline-block">
                    <button id="hs-pro-shnnd3" type="button" className="hs-dropdown-toggle py-3 md:py-5 md:px-4 lg:px-5 w-full md:w-auto flex items-center text-sm text-start text-gray-800 rounded-lg underline underline-offset-4 f1348 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden ow4j6 dark:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                      Kids
                      <svg className="md:hidden hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 ms-auto lbtf0 shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                 
                  </div>

                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--auto-close:inside] md:inline-block">
                    <button id="hs-pro-shnnd4" type="button" className="hs-dropdown-toggle py-3 md:py-5 md:px-4 lg:px-5 w-full md:w-auto flex items-center text-sm text-start text-gray-800 rounded-lg underline underline-offset-4 f1348 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden ow4j6 dark:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                      Home
                      <svg className="md:hidden hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 ms-auto lbtf0 shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                  
                  </div>

                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--auto-close:inside] md:inline-block">
                    <button id="hs-pro-shnnd5" type="button" className="hs-dropdown-toggle py-3 md:py-5 md:px-4 lg:px-5 w-full md:w-auto flex items-center text-sm text-start text-gray-800 rounded-lg underline underline-offset-4 f1348 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden ow4j6 dark:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                      Sales
                      <svg className="md:hidden hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 ms-auto lbtf0 shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="content">
        <div className="oqskk sctrb w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <div data-hs-carousel='{
              "loadingClasses": "opacity-0",
              "isInfiniteLoop": true
            }' className="relative">
            <div className="hs-carousel relative overflow-hidden w-full n95xd uof0k f4yn1 er6t7 dark:bg-neutral-800">
              <div className="hs-carousel-body absolute top-0 mq18k left-0 flex flex-nowrap oeanj mx4xe opacity-0">
                <div className="hs-carousel-slide">
                  <div className="n95xd uof0k relative">
                    <img className="absolute inset-0 w-full h-full x1s1r er6t7" src="https://images.unsplash.com/photo-1713276753136-c386da1ec670?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image" />

                    <div className="relative wzd7f dtief w-full h-full yvubh mx-auto cke2x flex flex-col justify-center items-center">
                      <h2 className="font-semibold a3jay gdj38 z90t7 kew0r">
                        Fall favorites
                      </h2>

                      <p className="wc6fu text-sm cve4m kew0r">
                        Our always-in-season staple, in brand new colors and your favorite fits.
                      </p>

                      <div className="chaem bd2gd">
                        <div className="flex flex-wrap justify-center n60o7 cno6w">
                          <a className="text-sm cve4m kew0r l5oyh underline underline-offset-4 k6i4c focus:outline-hidden v76i6" href="../../pro/shop/listing-grid-with-mini-categories.html">
                            Shop women's clothing
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hs-carousel-slide">
                  <div className="n95xd uof0k relative">
                    <img className="absolute inset-0 w-full h-full x1s1r er6t7" src="https://images.unsplash.com/photo-1603139635700-04637d0d16bd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image" />

                    <div className="relative wzd7f dtief w-full h-full yvubh mx-auto cke2x flex flex-col justify-center items-center">
                      <h2 className="font-semibold a3jay gdj38 z90t7 kew0r">
                        New styles
                      </h2>

                      <p className="wc6fu text-sm cve4m kew0r">
                        From lightweight layers to the perfect pair of pants, new seasonal favorites are here.
                      </p>

                      <div className="chaem bd2gd">
                        <div className="flex flex-wrap justify-center n60o7 cno6w">
                          <a className="text-sm cve4m kew0r l5oyh underline underline-offset-4 k6i4c focus:outline-hidden v76i6" href="../../pro/shop/listing-grid.html">
                            Shop men
                          </a>

                          <a className="text-sm cve4m kew0r l5oyh underline underline-offset-4 k6i4c focus:outline-hidden v76i6" href="../../pro/shop/listing-grid-with-categories.html">
                            Shop women
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hs-carousel-slide">
                  <div className="n95xd uof0k relative">
                    <img className="absolute inset-0 w-full h-full x1s1r er6t7" src="https://images.unsplash.com/photo-1684144064253-bb3b4c8fc700?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image" />

                    <div className="relative wzd7f dtief w-full h-full yvubh mx-auto cke2x flex flex-col justify-center items-center">
                      <p className="text-sm cve4m vj9jb kew0r">
                        Summer sale
                      </p>

                      <h2 className="ja90s font-semibold a3jay gdj38 z90t7 kew0r">
                        Up to 50% off
                      </h2>

                      <div className="chaem bd2gd">
                        <div className="flex flex-wrap justify-center n60o7 cno6w">
                          <a className="text-sm cve4m kew0r l5oyh underline underline-offset-4 k6i4c focus:outline-hidden v76i6" href="../../pro/shop/listing-grid.html">
                            Shop men
                          </a>

                          <a className="text-sm cve4m kew0r l5oyh underline underline-offset-4 k6i4c focus:outline-hidden v76i6" href="../../pro/shop/listing-grid-with-categories.html">
                            Shop women
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute zoyba sbaxu ea20r inline-flex justify-center items-center fjwwc bg-white rsdjd rxmp4 text-gray-800 rounded-full hj07t d05xb -translate-y-1/2 focus:outline-hidden">
              <span className="f8p8s" aria-hidden="true">
                <svg className="shrink-0 yhc35" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </span>
              <span className="et50x">Previous</span>
            </button>
            <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute zoyba awc97 l91u8 inline-flex justify-center items-center fjwwc bg-white rsdjd rxmp4 text-gray-800 rounded-full hj07t d05xb -translate-y-1/2 focus:outline-hidden">
              <span className="et50x">Next</span>
              <span className="f8p8s" aria-hidden="true">
                <svg className="shrink-0 yhc35" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </button>

            <div className="an00p absolute mq18k e33ca dtief">
              <div className="ga1u8 jxswk inline-flex justify-center items-center o4ndh bg-white rounded-full">
                <span className="hs-carousel-info xs2f2 text-gray-800">
                  <span className="hs-carousel-info-current inline-block koktq dtief">1</span> / <span className="hs-carousel-info-total inline-block koktq dtief">3</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="db2ir s64f7 w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-wrap justify-center fr7c6 vyfcq zd410">
            <a className="group relative block laign mubfu o2cfy  dtief focus:outline-hidden" href="../../pro/shop/listing-grid-with-hero.html">
              <img className="v4jc2 q2at0 ud69h mx-auto x1s1r f4yn1 rounded-full e0i52 n222g lapju group-hover:ring-gray-300 dark:bg-neutral-800 dark:ring-offset-neutral-900 dark:group-hover:ring-neutral-700" src="https://images.unsplash.com/photo-1706550632260-ced24a56f19a?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
              <span className="wc6fu block text-sm e4ljf text-gray-800 dark:text-neutral-200">T-Shirts</span>
            </a>

            <a className="group relative block laign mubfu o2cfy  dtief focus:outline-hidden" href="../../pro/shop/listing-grid-with-hero.html">
              <img className="v4jc2 q2at0 ud69h mx-auto x1s1r f4yn1 rounded-full e0i52 n222g lapju group-hover:ring-gray-300 dark:bg-neutral-800 dark:ring-offset-neutral-900 dark:group-hover:ring-neutral-700" src="https://images.unsplash.com/photo-1668934807785-2772baa219a4?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
              <span className="wc6fu block text-sm e4ljf text-gray-800 dark:text-neutral-200">Trousers</span>
            </a>

            <a className="group relative block laign mubfu o2cfy  dtief focus:outline-hidden" href="../../pro/shop/listing-grid-with-hero.html">
              <img className="v4jc2 q2at0 ud69h mx-auto x1s1r f4yn1 rounded-full e0i52 n222g lapju group-hover:ring-gray-300 dark:bg-neutral-800 dark:ring-offset-neutral-900 dark:group-hover:ring-neutral-700" src="https://images.unsplash.com/photo-1700853012811-ce0a42d2b6d3?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
              <span className="wc6fu block text-sm e4ljf text-gray-800 dark:text-neutral-200">Shoes</span>
            </a>

            <a className="group relative block laign mubfu o2cfy  dtief focus:outline-hidden" href="../../pro/shop/listing-grid-with-hero.html">
              <img className="v4jc2 q2at0 ud69h mx-auto x1s1r f4yn1 rounded-full e0i52 n222g lapju group-hover:ring-gray-300 dark:bg-neutral-800 dark:ring-offset-neutral-900 dark:group-hover:ring-neutral-700" src="https://images.unsplash.com/photo-1571867424485-369464ed33cc?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
              <span className="wc6fu block text-sm e4ljf text-gray-800 dark:text-neutral-200">Jackets</span>
            </a>
          </div>
        </div>

        <div className="p30n2 y95gc w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <div id="hs-listing-with-tab-and-slider" className="hl65v x5nwc mx-auto dtief">
            <h2 className="e3s31 font-semibold text-xl iqo6n text-gray-800 dark:text-neutral-200">
              Trending now
            </h2>

            <nav className="wix63 w-full inline-flex bg-white rsdjd border-gray-200 er6t7 dark:bg-neutral-900 dark:border-neutral-700" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
              <button type="button" className="hs-tab-active:bg-gray-100 hs-tab-active:focus:bg-gray-100 hs-tab-active:focus:text-gray-800 w-full inline-flex justify-center items-center gap-x-2 text-gray-800 od5va jxswk yzhap z8qsr text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden dulc0 dark:hs-tab-active:bg-neutral-800 dark:focus:hs-tab-active:bg-neutral-800 dark:focus:hs-tab-active:text-neutral-200 dark:text-neutral-200 dark:focus:text-neutral-400 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden active" id="hs-pro-tabs-shao-item-men" aria-selected="true" data-hs-tab="#hs-pro-tabs-shao-men" aria-controls="hs-pro-tabs-shao-men" role="tab">
                Men
              </button>
              <button type="button" className="hs-tab-active:bg-gray-100 hs-tab-active:focus:bg-gray-100 hs-tab-active:focus:text-gray-800 w-full inline-flex justify-center items-center gap-x-2 text-gray-800 od5va jxswk yzhap z8qsr text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden dulc0 dark:hs-tab-active:bg-neutral-800 dark:focus:hs-tab-active:bg-neutral-800 dark:focus:hs-tab-active:text-neutral-200 dark:text-neutral-200 dark:focus:text-neutral-400 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden " id="hs-pro-tabs-shao-item-women" aria-selected="false" data-hs-tab="#hs-pro-tabs-shao-women" aria-controls="hs-pro-tabs-shao-women" role="tab">
                Women
              </button>
            </nav>
          </div>

          <div id="hs-pro-tabs-shao-men" role="tabpanel" aria-labelledby="hs-pro-tabs-shao-item-men">
            <div data-hs-carousel='{
              "loadingClasses": "opacity-0",
              "slidesQty": {
                "xs": 2,
                "sm": 3,
                "lg": 4
              },
              "isDraggable": true
            }' className="relative">
              <div className="hs-carousel w-full overflow-hidden">
                <div className="hs-carousel w-full">
                  <div className="hs-carousel-body flex flex-nowrap g27d7 gbedp opacity-0 oeanj mx4xe tv623 zqex4 ngv94">
                    <div className="hs-carousel-slide">
                      <div className=" group relative">
                        <div className="relative">
                          <a className="block er6t7 focus:outline-hidden" href="../../pro/shop/product-detail.html">
                            <img className="f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1708443683202-a5be0ced5b8b?q=80&w=560&h=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                          </a>

                          <div className="absolute top-0 kji94 wzd7f kmove mx6w2">
                            <button type="button" className="odrp3 flex justify-center items-center gap-x-1 rounded-full xs2f2 bg-white rsdjd azddh text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden">
                              <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                              </svg>
                              <span className="et50x">Add to favorites</span>
                            </button>
                          </div>

                          <div className="absolute zoyba iq0t2 m2hfy h587a -translate-y-1/2 -translate-x-1/2">
                            <div className="opacity-0 group-hover:opacity-100 group-hover:mb-0 -mb-2 duration-300">
                              <div className="h-full flex flex-col justify-center items-center">
                                <button type="button" className="s1lil flex items-center b1nd2 s53ws f2l40 bg-white text-gray-800 xs2f2 rounded-full losw6 focus:outline-hidden dulc0" data-hs-overlay="#hs-pro-shchpdm">
                                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                    <circle cx="12" cy="12" r="3" />
                                  </svg>
                                  Quick view
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a className="after:z-1 after:absolute after:inset-0" href="../../pro/shop/product-detail.html"></a>

                        <div className="f5e2w">
                          <span className="block text-sm cve4m text-gray-800 dark:text-neutral-200">
                            Slim Lyocell Trousers
                          </span>
                          <p className="ja90s text-sm jy5gh dark:text-neutral-400">
                            Men's Trousers
                          </p>

                          <p className="rwavo sikx1 text-sm text-gray-800 dark:text-neutral-200">
                            $50
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hs-carousel-slide">
                      <div className=" group relative">
                        <div className="relative">
                          <a className="block er6t7 focus:outline-hidden" href="../../pro/shop/product-detail.html">
                            <img className="f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1708443683334-1e41c52f33ac?q=80&w=560&h=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                          </a>

                          <div className="absolute top-0 kji94 wzd7f kmove mx6w2">
                            <button type="button" className="odrp3 flex justify-center items-center gap-x-1 rounded-full xs2f2 bg-white rsdjd azddh text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden">
                              <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                              </svg>
                              <span className="et50x">Add to favorites</span>
                            </button>
                          </div>

                          <div className="absolute top-0 left-0 kmove z47ts gxxgf">
                            <div className="flex flex-col jon87">
                              <p>
                                <span className="ga1u8 u4i8k mx6w2 bg-white sikx1 xs2f2 text-gray-800 rounded-full hj07t dark:bg-neutral-900 dark:text-neutral-200">
                                  🔥 Trending
                                </span>
                              </p>
                            </div>
                          </div>

                          <div className="absolute zoyba iq0t2 m2hfy h587a -translate-y-1/2 -translate-x-1/2">
                            <div className="opacity-0 group-hover:opacity-100 group-hover:mb-0 -mb-2 duration-300">
                              <div className="h-full flex flex-col justify-center items-center">
                                <button type="button" className="s1lil flex items-center b1nd2 s53ws f2l40 bg-white text-gray-800 xs2f2 rounded-full losw6 focus:outline-hidden dulc0" data-hs-overlay="#hs-pro-shchpdm">
                                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                    <circle cx="12" cy="12" r="3" />
                                  </svg>
                                  Quick view
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a className="after:z-1 after:absolute after:inset-0" href="../../pro/shop/product-detail.html"></a>

                        <div className="f5e2w">
                          <span className="block text-sm cve4m text-gray-800 dark:text-neutral-200">
                            Camo Blend Jacket
                          </span>
                          <p className="ja90s text-sm jy5gh dark:text-neutral-400">
                            Men's Jackets
                          </p>

                          <p className="rwavo sikx1 text-sm text-gray-800 dark:text-neutral-200">
                            $140
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hs-carousel-slide">
                      <div className=" group relative">
                        <div className="relative">
                          <a className="block er6t7 focus:outline-hidden" href="../../pro/shop/product-detail.html">
                            <img className="f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1708443683198-a2b77a54c36e?q=80&w=560&h=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                          </a>

                          <div className="absolute top-0 kji94 wzd7f kmove mx6w2">
                            <button type="button" className="odrp3 flex justify-center items-center gap-x-1 rounded-full xs2f2 bg-white rsdjd azddh text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden">
                              <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                              </svg>
                              <span className="et50x">Add to favorites</span>
                            </button>
                          </div>

                          <div className="absolute top-0 left-0 kmove z47ts gxxgf">
                            <div className="flex flex-col jon87">
                              <p>
                                <span className="ga1u8 u4i8k mx6w2 bg-white sikx1 xs2f2 text-gray-800 rounded-full hj07t dark:bg-neutral-900 dark:text-neutral-200">
                                  🔥 Trending
                                </span>
                              </p>
                            </div>
                          </div>

                          <div className="absolute zoyba iq0t2 m2hfy h587a -translate-y-1/2 -translate-x-1/2">
                            <div className="opacity-0 group-hover:opacity-100 group-hover:mb-0 -mb-2 duration-300">
                              <div className="h-full flex flex-col justify-center items-center">
                                <button type="button" className="s1lil flex items-center b1nd2 s53ws f2l40 bg-white text-gray-800 xs2f2 rounded-full losw6 focus:outline-hidden dulc0" data-hs-overlay="#hs-pro-shchpdm">
                                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                    <circle cx="12" cy="12" r="3" />
                                  </svg>
                                  Quick view
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a className="after:z-1 after:absolute after:inset-0" href="../../pro/shop/product-detail.html"></a>

                        <div className="f5e2w">
                          <span className="block text-sm cve4m text-gray-800 dark:text-neutral-200">
                            Cotton T-Shirt
                          </span>
                          <p className="ja90s text-sm jy5gh dark:text-neutral-400">
                            Men's T-Shirts
                          </p>

                          <p className="rwavo sikx1 text-sm text-gray-800 dark:text-neutral-200">
                            $35
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hs-carousel-slide">
                      <div className=" group relative">
                        <div className="relative">
                          <a className="block er6t7 focus:outline-hidden" href="../../pro/shop/product-detail.html">
                            <img className="f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1708443683276-8a3eb30faef2?q=80&w=560&h=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                          </a>

                          <div className="absolute top-0 kji94 wzd7f kmove mx6w2">
                            <button type="button" className="odrp3 flex justify-center items-center gap-x-1 rounded-full xs2f2 bg-white rsdjd azddh text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden">
                              <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                              </svg>
                              <span className="et50x">Add to favorites</span>
                            </button>
                          </div>

                          <div className="absolute zoyba iq0t2 m2hfy h587a -translate-y-1/2 -translate-x-1/2">
                            <div className="opacity-0 group-hover:opacity-100 group-hover:mb-0 -mb-2 duration-300">
                              <div className="h-full flex flex-col justify-center items-center">
                                <button type="button" className="s1lil flex items-center b1nd2 s53ws f2l40 bg-white text-gray-800 xs2f2 rounded-full losw6 focus:outline-hidden dulc0" data-hs-overlay="#hs-pro-shchpdm">
                                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                    <circle cx="12" cy="12" r="3" />
                                  </svg>
                                  Quick view
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a className="after:z-1 after:absolute after:inset-0" href="../../pro/shop/product-detail.html"></a>

                        <div className="f5e2w">
                          <span className="block text-sm cve4m text-gray-800 dark:text-neutral-200">
                            Embroidered Hoodie
                          </span>
                          <p className="ja90s text-sm jy5gh dark:text-neutral-400">
                            Men's Sweaters
                          </p>

                          <p className="rwavo sikx1 text-sm text-gray-800 dark:text-neutral-200">
                            $69
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hs-carousel-slide">
                      <div className=" group relative">
                        <div className="relative">
                          <a className="block er6t7 focus:outline-hidden" href="../../pro/shop/product-detail.html">
                            <img className="f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1627225793904-a2f900a6e4cf?q=80&w=560&h=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                          </a>

                          <div className="absolute top-0 kji94 wzd7f kmove mx6w2">
                            <button type="button" className="odrp3 flex justify-center items-center gap-x-1 rounded-full xs2f2 bg-white rsdjd azddh text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden">
                              <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                              </svg>
                              <span className="et50x">Add to favorites</span>
                            </button>
                          </div>

                          <div className="absolute zoyba iq0t2 m2hfy h587a -translate-y-1/2 -translate-x-1/2">
                            <div className="opacity-0 group-hover:opacity-100 group-hover:mb-0 -mb-2 duration-300">
                              <div className="h-full flex flex-col justify-center items-center">
                                <button type="button" className="s1lil flex items-center b1nd2 s53ws f2l40 bg-white text-gray-800 xs2f2 rounded-full losw6 focus:outline-hidden dulc0" data-hs-overlay="#hs-pro-shchpdm">
                                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                    <circle cx="12" cy="12" r="3" />
                                  </svg>
                                  Quick view
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a className="after:z-1 after:absolute after:inset-0" href="../../pro/shop/product-detail.html"></a>

                        <div className="f5e2w">
                          <span className="block text-sm cve4m text-gray-800 dark:text-neutral-200">
                            Everyday Solid White T-Shirt
                          </span>
                          <p className="ja90s text-sm jy5gh dark:text-neutral-400">
                            Men's T-Shirts
                          </p>

                          <p className="rwavo sikx1 text-sm text-gray-800 dark:text-neutral-200">
                            $30
                          </p>

                          <div className="wc6fu flex items-center gap-x-0.5">
                            <svg className="shrink-0 mo9p3 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                            <svg className="shrink-0 mo9p3 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                            <svg className="shrink-0 mo9p3 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                            <svg className="shrink-0 mo9p3 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                            <svg className="shrink-0 mo9p3 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                            <span className="ml-1 xs2f2 text-gray-800 dark:text-neutral-200">
                              (6)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute zoyba xviih inline-flex justify-center items-center fjwwc bg-white rsdjd rxmp4 text-gray-800 rounded-full hj07t d05xb -translate-y-1/2 focus:outline-hidden">
                <span className="f8p8s" aria-hidden="true">
                  <svg className="shrink-0 yhc35" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </span>
                <span className="et50x">Previous</span>
              </button>
              <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute zoyba tb54y inline-flex justify-center items-center fjwwc bg-white rsdjd rxmp4 text-gray-800 rounded-full hj07t d05xb -translate-y-1/2 focus:outline-hidden">
                <span className="et50x">Next</span>
                <span className="f8p8s" aria-hidden="true">
                  <svg className="shrink-0 yhc35" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </button>
            </div>

            <div className="ah7xl dtief">
              <a className="inline-flex items-center b1nd2 text-gray-800 l5oyh underline underline-offset-4 iiod0 focus:outline-hidden s6w37 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400" href="../../pro/shop/listing-grid.html">
                Shop all men
                <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>

          <div id="hs-pro-tabs-shao-women" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-shao-item-women">
            <div data-hs-carousel='{
              "loadingClasses": "opacity-0",
              "slidesQty": {
                "xs": 2,
                "sm": 3,
                "lg": 4
              },
              "hasSnapSpacers": false,
              "isDraggable": true
            }' className="relative">
              <div className="hs-carousel w-full overflow-hidden">
                <div className="hs-carousel w-full">
                  <div className="hs-carousel-body flex flex-nowrap g27d7 gbedp opacity-0 oeanj mx4xe tv623 zqex4 ngv94">
                    <div className="hs-carousel-slide">
                      <div className=" group relative">
                        <div className="relative">
                          <a className="block er6t7 focus:outline-hidden" href="../../pro/shop/product-detail.html">
                            <img className="f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1644483878395-858cd642538e?q=80&w=560&h=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                          </a>

                          <div className="absolute top-0 kji94 wzd7f kmove mx6w2">
                            <button type="button" className="odrp3 flex justify-center items-center gap-x-1 rounded-full xs2f2 bg-white rsdjd azddh text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden">
                              <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                              </svg>
                              <span className="et50x">Add to favorites</span>
                            </button>
                          </div>

                          <div className="absolute top-0 left-0 kmove z47ts gxxgf">
                            <div className="flex flex-col jon87">
                              <p>
                                <span className="ga1u8 u4i8k mx6w2 bg-white sikx1 xs2f2 text-gray-800 rounded-full hj07t dark:bg-neutral-900 dark:text-neutral-200">
                                  -7%
                                </span>
                              </p>
                            </div>
                          </div>

                          <div className="absolute zoyba iq0t2 m2hfy h587a -translate-y-1/2 -translate-x-1/2">
                            <div className="opacity-0 group-hover:opacity-100 group-hover:mb-0 -mb-2 duration-300">
                              <div className="h-full flex flex-col justify-center items-center">
                                <button type="button" className="s1lil flex items-center b1nd2 s53ws f2l40 bg-white text-gray-800 xs2f2 rounded-full losw6 focus:outline-hidden dulc0" data-hs-overlay="#hs-pro-shchpdm">
                                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                    <circle cx="12" cy="12" r="3" />
                                  </svg>
                                  Quick view
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a className="after:z-1 after:absolute after:inset-0" href="../../pro/shop/product-detail.html"></a>

                        <div className="f5e2w">
                          <span className="block text-sm cve4m text-gray-800 dark:text-neutral-200">
                            White Shirt
                          </span>
                          <p className="ja90s text-sm jy5gh dark:text-neutral-400">
                            Women's Shirts
                          </p>

                          <p className="rwavo sikx1 text-sm text-gray-800 dark:text-neutral-200">
                            $125
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hs-carousel-slide">
                      <div className=" group relative">
                        <div className="relative">
                          <a className="block er6t7 focus:outline-hidden" href="../../pro/shop/product-detail.html">
                            <img className="f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1654512697704-89cf740323a3?q=80&w=560&h=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                          </a>

                          <div className="absolute top-0 kji94 wzd7f kmove mx6w2">
                            <button type="button" className="odrp3 flex justify-center items-center gap-x-1 rounded-full xs2f2 bg-white rsdjd azddh text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden">
                              <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                              </svg>
                              <span className="et50x">Add to favorites</span>
                            </button>
                          </div>

                          <div className="absolute top-0 left-0 kmove z47ts gxxgf">
                            <div className="flex flex-col jon87">
                              <p>
                                <span className="ga1u8 u4i8k mx6w2 bg-white sikx1 xs2f2 text-gray-800 rounded-full hj07t dark:bg-neutral-900 dark:text-neutral-200">
                                  🔥 Trending
                                </span>
                              </p>
                            </div>
                          </div>

                          <div className="absolute zoyba iq0t2 m2hfy h587a -translate-y-1/2 -translate-x-1/2">
                            <div className="opacity-0 group-hover:opacity-100 group-hover:mb-0 -mb-2 duration-300">
                              <div className="h-full flex flex-col justify-center items-center">
                                <button type="button" className="s1lil flex items-center b1nd2 s53ws f2l40 bg-white text-gray-800 xs2f2 rounded-full losw6 focus:outline-hidden dulc0" data-hs-overlay="#hs-pro-shchpdm">
                                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                    <circle cx="12" cy="12" r="3" />
                                  </svg>
                                  Quick view
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a className="after:z-1 after:absolute after:inset-0" href="../../pro/shop/product-detail.html"></a>

                        <div className="f5e2w">
                          <span className="block text-sm cve4m text-gray-800 dark:text-neutral-200">
                            Micro Houndstooth Suit Blazer
                          </span>
                          <p className="ja90s text-sm jy5gh dark:text-neutral-400">
                            Women's Blazers
                          </p>

                          <p className="rwavo sikx1 text-sm text-gray-800 dark:text-neutral-200">
                            $35
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hs-carousel-slide">
                      <div className=" group relative">
                        <div className="relative">
                          <a className="block er6t7 focus:outline-hidden" href="../../pro/shop/product-detail.html">
                            <img className="f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1654512697746-0c7f20924c77?q=80&w=560&h=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                          </a>

                          <div className="absolute top-0 kji94 wzd7f kmove mx6w2">
                            <button type="button" className="odrp3 flex justify-center items-center gap-x-1 rounded-full xs2f2 bg-white rsdjd azddh text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden">
                              <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                              </svg>
                              <span className="et50x">Add to favorites</span>
                            </button>
                          </div>

                          <div className="absolute top-0 left-0 kmove z47ts gxxgf">
                            <div className="flex flex-col jon87">
                              <p>
                                <span className="ga1u8 u4i8k mx6w2 bg-white sikx1 xs2f2 text-gray-800 rounded-full hj07t dark:bg-neutral-900 dark:text-neutral-200">
                                  🔥 Trending
                                </span>
                              </p>
                            </div>
                          </div>

                          <div className="absolute zoyba iq0t2 m2hfy h587a -translate-y-1/2 -translate-x-1/2">
                            <div className="opacity-0 group-hover:opacity-100 group-hover:mb-0 -mb-2 duration-300">
                              <div className="h-full flex flex-col justify-center items-center">
                                <button type="button" className="s1lil flex items-center b1nd2 s53ws f2l40 bg-white text-gray-800 xs2f2 rounded-full losw6 focus:outline-hidden dulc0" data-hs-overlay="#hs-pro-shchpdm">
                                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                    <circle cx="12" cy="12" r="3" />
                                  </svg>
                                  Quick view
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a className="after:z-1 after:absolute after:inset-0" href="../../pro/shop/product-detail.html"></a>

                        <div className="f5e2w">
                          <span className="block text-sm cve4m text-gray-800 dark:text-neutral-200">
                            Micro Houndstooth Suit Blazer
                          </span>
                          <p className="ja90s text-sm jy5gh dark:text-neutral-400">
                            Women's Blazers
                          </p>

                          <p className="rwavo sikx1 text-sm text-gray-800 dark:text-neutral-200">
                            $89
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hs-carousel-slide">
                      <div className=" group relative">
                        <div className="relative">
                          <a className="block er6t7 focus:outline-hidden" href="../../pro/shop/product-detail.html">
                            <img className="f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1585487000143-9bcec9b8e483?q=80&w=560&h=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                          </a>

                          <div className="absolute top-0 kji94 wzd7f kmove mx6w2">
                            <button type="button" className="odrp3 flex justify-center items-center gap-x-1 rounded-full xs2f2 bg-white rsdjd azddh text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden">
                              <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                              </svg>
                              <span className="et50x">Add to favorites</span>
                            </button>
                          </div>

                          <div className="absolute zoyba iq0t2 m2hfy h587a -translate-y-1/2 -translate-x-1/2">
                            <div className="opacity-0 group-hover:opacity-100 group-hover:mb-0 -mb-2 duration-300">
                              <div className="h-full flex flex-col justify-center items-center">
                                <button type="button" className="s1lil flex items-center b1nd2 s53ws f2l40 bg-white text-gray-800 xs2f2 rounded-full losw6 focus:outline-hidden dulc0" data-hs-overlay="#hs-pro-shchpdm">
                                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                    <circle cx="12" cy="12" r="3" />
                                  </svg>
                                  Quick view
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a className="after:z-1 after:absolute after:inset-0" href="../../pro/shop/product-detail.html"></a>

                        <div className="f5e2w">
                          <span className="block text-sm cve4m text-gray-800 dark:text-neutral-200">
                            Light Gray Midi Dress
                          </span>
                          <p className="ja90s text-sm jy5gh dark:text-neutral-400">
                            Women's Dresses
                          </p>

                          <p className="rwavo sikx1 text-sm text-gray-800 dark:text-neutral-200">
                            $140
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hs-carousel-slide">
                      <div className=" group relative">
                        <div className="relative">
                          <a className="block er6t7 focus:outline-hidden" href="../../pro/shop/product-detail.html">
                            <img className="f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=560&h=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                          </a>

                          <div className="absolute top-0 kji94 wzd7f kmove mx6w2">
                            <button type="button" className="odrp3 flex justify-center items-center gap-x-1 rounded-full xs2f2 bg-white rsdjd azddh text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden">
                              <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                              </svg>
                              <span className="et50x">Add to favorites</span>
                            </button>
                          </div>

                          <div className="absolute top-0 left-0 kmove z47ts gxxgf">
                            <div className="flex flex-col jon87">
                              <p>
                                <span className="ga1u8 u4i8k mx6w2 bg-white sikx1 xs2f2 text-gray-800 rounded-full hj07t dark:bg-neutral-900 dark:text-neutral-200">
                                  🔥 Trending
                                </span>
                              </p>
                            </div>
                          </div>

                          <div className="absolute zoyba iq0t2 m2hfy h587a -translate-y-1/2 -translate-x-1/2">
                            <div className="opacity-0 group-hover:opacity-100 group-hover:mb-0 -mb-2 duration-300">
                              <div className="h-full flex flex-col justify-center items-center">
                                <button type="button" className="s1lil flex items-center b1nd2 s53ws f2l40 bg-white text-gray-800 xs2f2 rounded-full losw6 focus:outline-hidden dulc0" data-hs-overlay="#hs-pro-shchpdm">
                                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                    <circle cx="12" cy="12" r="3" />
                                  </svg>
                                  Quick view
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a className="after:z-1 after:absolute after:inset-0" href="../../pro/shop/product-detail.html"></a>

                        <div className="f5e2w">
                          <span className="block text-sm cve4m text-gray-800 dark:text-neutral-200">
                            Yoga Leggings
                          </span>
                          <p className="ja90s text-sm jy5gh dark:text-neutral-400">
                            Women's Leggings
                          </p>

                          <p className="rwavo sikx1 text-sm text-gray-800 dark:text-neutral-200">
                            $89
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute zoyba xviih inline-flex justify-center items-center fjwwc bg-white rsdjd rxmp4 text-gray-800 rounded-full hj07t d05xb -translate-y-1/2 focus:outline-hidden">
                <span className="f8p8s" aria-hidden="true">
                  <svg className="shrink-0 yhc35" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </span>
                <span className="et50x">Previous</span>
              </button>
              <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute zoyba tb54y inline-flex justify-center items-center fjwwc bg-white rsdjd rxmp4 text-gray-800 rounded-full hj07t d05xb -translate-y-1/2 focus:outline-hidden">
                <span className="et50x">Next</span>
                <span className="f8p8s" aria-hidden="true">
                  <svg className="shrink-0 yhc35" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </button>
            </div>

            <div className="ah7xl eu7q9 dtief">
              <a className="inline-flex items-center b1nd2 text-gray-800 l5oyh underline underline-offset-4 iiod0 focus:outline-hidden s6w37 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400" href="../../pro/shop/listing-grid-with-categories.html">
                Shop all women
                <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="n8xpr hovfi qox4a b2ubo mx-auto dtief">
            <h2 className="font-semibold text-xl iqo6n text-gray-800 dark:text-neutral-200">
              The better way to shop with Preline top-products
            </h2>
          </div>

          <div className="ylm8n hjdn7 fafsg dy3ai n60o7">
            <div className="relative group bg-white rsdjd border-gray-200 er6t7 tvbow dark:bg-neutral-900 dark:border-neutral-700">
              <div className="taag7 ylm8n yjjd2">
                <div className="mrkie vyel6 hzp86">
                  <img className="w-full h-[calc(20rem-8px)] f4yn1 x1s1r rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1699595749116-33a4a869503c?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                </div>
                <div className="qhvks vyel6 space-y-1">
                  <img className="w-full h-[calc(10rem-6px)] f4yn1 x1s1r rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1699593022913-7068606059c8?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                  <img className="w-full h-[calc(10rem-6px)] f4yn1 x1s1r rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                </div>
              </div>

              <div className="jq72l dtief">
                <h4 className="sikx1 tbkeq text-gray-800 dark:text-neutral-200">
                  Nike Shoes
                </h4>
                <p className="rwavo text-sm jy5gh dark:text-neutral-500">
                  Starting from $99
                </p>

                <p className="wc6fu">
                  <span className="inline-flex items-center b1nd2 text-sm text-gray-800 l5oyh underline underline-offset-4 group-hover:text-indigo-600 group-focus:text-indigo-600 dark:text-neutral-200 dark:group-hover:text-indigo-400 dark:group-focus:text-indigo-400">
                    View all
                  </span>
                </p>
              </div>

              <a className="after:absolute after:inset-0 after:z-10" href="../../pro/shop/listing-grid.html"></a>
            </div>

            <div className="relative group bg-white rsdjd border-gray-200 er6t7 tvbow dark:bg-neutral-900 dark:border-neutral-700">
              <div className="taag7 ylm8n yjjd2">
                <div className="mrkie vyel6 hzp86">
                  <img className="w-full h-[calc(20rem-8px)] f4yn1 x1s1r rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1708443683276-8a3eb30faef2?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                </div>
                <div className="qhvks vyel6 space-y-1">
                  <img className="w-full h-[calc(10rem-6px)] f4yn1 x1s1r rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1627225924765-552d49cf47ad?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                  <img className="w-full h-[calc(10rem-6px)] f4yn1 x1s1r rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1708443683198-a2b77a54c36e?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                </div>
              </div>

              <div className="jq72l dtief">
                <h4 className="sikx1 tbkeq text-gray-800 dark:text-neutral-200">
                  Men's Clothing
                </h4>
                <p className="rwavo text-sm jy5gh dark:text-neutral-500">
                  Starting from $39
                </p>

                <p className="wc6fu">
                  <span className="inline-flex items-center b1nd2 text-sm text-gray-800 l5oyh underline underline-offset-4 group-hover:text-indigo-600 group-focus:text-indigo-600 dark:text-neutral-200 dark:group-hover:text-indigo-400 dark:group-focus:text-indigo-400">
                    View all
                  </span>
                </p>
              </div>

              <a className="after:absolute after:inset-0 after:z-10" href="../../pro/shop/listing-grid.html"></a>
            </div>

            <div className="relative group bg-white rsdjd border-gray-200 er6t7 tvbow dark:bg-neutral-900 dark:border-neutral-700">
              <div className="taag7 ylm8n yjjd2">
                <div className="mrkie vyel6 hzp86">
                  <img className="w-full h-[calc(20rem-8px)] f4yn1 x1s1r rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1654512697735-d7ff21350443?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                </div>
                <div className="qhvks vyel6 space-y-1">
                  <img className="w-full h-[calc(10rem-6px)] f4yn1 x1s1r rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                  <img className="w-full h-[calc(10rem-6px)] f4yn1 x1s1r rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                </div>
              </div>

              <div className="jq72l dtief">
                <h4 className="sikx1 tbkeq text-gray-800 dark:text-neutral-200">
                  Women's Clothing
                </h4>
                <p className="rwavo text-sm jy5gh dark:text-neutral-500">
                  Starting from $59
                </p>

                <p className="wc6fu">
                  <span className="inline-flex items-center b1nd2 text-sm text-gray-800 l5oyh underline underline-offset-4 group-hover:text-indigo-600 group-focus:text-indigo-600 dark:text-neutral-200 dark:group-hover:text-indigo-400 dark:group-focus:text-indigo-400">
                    View all
                  </span>
                </p>
              </div>

              <a className="after:absolute after:inset-0 after:z-10" href="../../pro/shop/listing-grid.html"></a>
            </div>
          </div>
        </div>

        <div className="p30n2 y95gc w-full max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center nokve dd1r6 at5b7">
            <svg className="laign h-auto mx-auto etpzx text-gray-800 dark:text-neutral-200" viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="currentColor"></path>
            </svg>

            <svg className="laign h-auto mx-auto etpzx text-gray-800 dark:text-neutral-200" fill="currentColor" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" viewBox="831.015 861.67509845 1337.165 497.16490155" width="2500" xmlns="http://www.w3.org/2000/svg">
              <path d="m1077.4 862.175c-76.02 86.851-181.29 184.085-206.557 305.415-39.828 191.25 192.817 186.09 305.737 139.41 332.35-137.38 661.07-283.39 991.6-425.084-321.38 85.602-641.61 175.654-964.15 256.804-230.745 58.06-185.84-147.9-126.63-276.545z" fill-rule="evenodd" />
              <path d="m1077.72 861.844a.476.476 0 0 0 -.66.031c-4.78 5.44-3.17 3.615-4.78 5.437-1.21 1.371-2.44 2.727-3.66 4.094-4.51 5.083-9.06 10.149-13.62 15.188-13.76 15.188-27.64 30.266-41.34 45.5-32.24 35.826-63.72 72.656-90.004 113.156-20.457 31.52-37.709 65.38-48.125 101.59a284.89 284.89 0 0 0 -4.719 18.75c-6.919 32.19-8.077 67.26 6.688 97.53 2.331 4.78 5.045 9.4 8.094 13.76 4.856 6.93 10.57 13.23 16.937 18.81 9.513 8.33 20.419 15 31.907 20.25 17.625 8.05 36.612 12.85 55.75 15.59 28.262 4.05 57.102 3.8 85.432.69 28-3.07 55.83-8.9 82.54-17.91 11.15-3.76 21.97-8.37 32.84-12.87 12.55-5.2 25.09-10.4 37.62-15.63 43.23-18.01 86.38-36.15 129.5-54.4 162.57-68.84 324.53-139.13 486.47-209.41 81.62-35.422 163.21-70.917 244.94-106.062 19.79-8.509 39.59-16.992 59.38-25.5 4.73-2.035 9.45-4.091 14.18-6.126 1.29-.554 2.59-1.101 3.88-1.656.16-.071 1.05-.406 1.06-.5.03-.185-.16-.159-.28-.187.01-.038-.07-.051-.03-.094.01-.017-.04.021-.06.031-.28.01-.61.109-.78.156-.84.224-1.67.433-2.5.657-4.19 1.117-8.38 2.226-12.57 3.343-10.88 2.906-21.75 5.834-32.62 8.75a63862.25 63862.25 0 0 0 -95.35 25.626c-95.33 25.726-190.59 51.698-285.9 77.5-167.62 45.372-335.33 90.522-503.69 133.092-10.08 2.55-20.14 5.11-30.22 7.63-8.54 2.13-17.15 4.05-25.81 5.62a297.76 297.76 0 0 1 -20.38 3c-5.27.59-10.54 1.01-15.84 1.25 16.14-.7 32.2-3.07 47.97-6.47 7.25-1.56 14.43-3.37 21.62-5.18 7.56-1.91 15.13-3.81 22.69-5.72 41.99-10.61 83.92-21.46 125.84-32.32 143.38-37.14 286.34-75.81 429.29-114.559 84.01-22.773 168.04-45.564 252.09-68.219 28.02-7.551 56.04-15.054 84.06-22.562 9.62-2.577 19.25-5.151 28.88-7.719l8.78-2.343c.82-.221 1.64-.436 2.47-.657-.05.022-.11.041-.16.063-1.29.554-2.58 1.101-3.87 1.656-4.31 1.848-8.61 3.714-12.91 5.562-17.21 7.394-34.42 14.763-51.63 22.157-68.4 29.39-136.71 59.046-205.03 88.661-170.13 73.74-340.15 147.78-510.93 220.03-50.03 21.16-100.08 42.25-150.22 63.12-13.4 5.58-26.81 11.17-40.22 16.72-9.6 3.97-19.16 8.05-28.97 11.5-19.46 6.84-39.62 11.9-59.94 15.41-13.32 2.3-26.73 4.03-40.22 5.03-10.46.77-20.97 1.08-31.47 1-8.42-.07-16.86-.46-25.24-1.25-5.62-.53-11.21-1.18-16.786-2.03-35.323-5.39-72.055-18.44-95.875-46.35-3.8-4.45-7.215-9.24-10.188-14.28-4.322-7.33-7.666-15.22-10.093-23.37-3.863-12.97-5.366-26.56-5.188-40.07.29-21.98 4.826-43.83 11.281-64.78 10.304-33.43 26.389-64.83 45.281-94.18 28.931-44.95 64.302-85.339 100.158-124.818 11.97-13.182 24.05-26.302 35.97-39.531 3.51-3.897 2.14-2.394 17.34-19.469 0-.007.03-.023.03-.031.83-.931 0-.004.94-1.062a.43.43 0 0 0 -.03-.625zm64.28 286.686c-14.72.66-30.1-.16-44.56-3.78 11.45 2.88 23.31 4.07 35.09 4.09 3.16.01 6.31-.17 9.47-.31zm-65.97-283.311a616.06 616.06 0 0 0 -1.84 4.062c-.86 1.904-1.67 3.836-2.5 5.75.44-1.025 1.68-3.845 4.34-9.812zm-4.34 9.812c-.17.376-1.27 2.836-1.6 3.594-.15.37-.28.755-.43 1.125.67-1.573 1.35-3.15 2.03-4.719zm-2.03 4.719c-.3.69-.62 1.372-.91 2.062-3.57 8.419-6.9 16.928-10.09 25.5a636.49 636.49 0 0 1 11-27.562zm-11 27.562c-.21.548-.46 1.078-.66 1.626-1.07 2.902-2.06 5.83-3.09 8.75a553.48 553.48 0 0 1 3.75-10.376zm-3.75 10.376c-.82 2.304-1.69 4.593-2.47 6.906-.19.539-.35 1.085-.53 1.625.96-2.861 1.99-5.687 3-8.531zm-3 8.531c-.66 1.947-1.24 3.92-1.88 5.875.64-1.956 1.22-3.927 1.88-5.875zm-1.88 5.875c-1.34 4.124-2.66 8.25-3.91 12.406 1.24-4.152 2.57-8.286 3.91-12.406zm-3.91 12.406c-.58 1.974-1.12 3.957-1.68 5.938.56-1.979 1.1-3.967 1.68-5.938zm-1.68 5.938c-.9 3.133-1.84 6.254-2.66 9.406-.25.966-.47 1.938-.72 2.906 1.06-4.127 2.21-8.214 3.38-12.312zm-3.38 12.312c-.46 1.807-.87 3.626-1.31 5.438.44-1.815.85-3.629 1.31-5.438zm-4.44 19.219c-.12.595-.28 1.185-.4 1.781-.12.57-.2 1.148-.31 1.719.23-1.168.47-2.335.71-3.5zm-4.9 29.251c-.24 1.94-.4 3.89-.6 5.84.2-1.94.36-3.9.6-5.84zm-.6 5.84c-.22 2.21-.54 4.41-.71 6.63-.12 1.49-.16 2.97-.25 4.47.21-3.71.59-7.4.96-11.1zm-1 12.13c-.26 4.71-.41 9.43-.37 14.15-.04-4.72.12-9.43.37-14.15zm-.37 14.72c.06 5.84.4 11.69 1.03 17.5-.62-5.84-.97-11.71-1.03-17.5zm1.28 19.65c.28 2.31.52 4.62.91 6.91.11.65.31 1.28.44 1.94-.54-2.94-.99-5.88-1.35-8.85zm1.35 8.85c.66 3.6 1.52 7.16 2.5 10.68-.99-3.53-1.84-7.08-2.5-10.68zm2.5 10.68c.35 1.3.65 2.6 1.06 3.88-.4-1.28-.71-2.58-1.06-3.88zm3.9 11.75c.35.86.69 1.72 1.06 2.57-.37-.85-.71-1.71-1.06-2.57zm1.06 2.57c.92 2.09 1.94 4.13 3 6.15a94.333 94.333 0 0 1 -3-6.15zm3 6.15c.2.36.37.74.57 1.1-.2-.36-.37-.73-.57-1.1zm.57 1.1c1.38 2.53 2.89 5.02 4.53 7.4-1.66-2.4-3.14-4.87-4.53-7.4zm4.53 7.4c2.91 4.24 6.2 8.22 9.97 11.85 2.71 2.61 5.68 4.91 8.75 7.09-3.03-2.15-5.97-4.51-8.72-7.16a76.553 76.553 0 0 1 -10-11.78zm18.97 19.13c1.17.82 2.31 1.7 3.53 2.47 1.31.82 2.74 1.41 4.09 2.15-2.6-1.43-5.18-2.9-7.62-4.62zm7.62 4.62c1.12.62 2.23 1.25 3.38 1.81-1.15-.56-2.26-1.19-3.38-1.81zm13.69 6.13c1.38.48 2.72 1.1 4.12 1.53 1.54.46 3.11.79 4.66 1.19-2.97-.76-5.9-1.71-8.78-2.72z" />
            </svg>

            <svg className="laign h-auto mx-auto etpzx text-gray-800 dark:text-neutral-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 192.756 192.756">
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path d="M80.323 92.735l-21.51.766 20.424 1.135 1.086-1.901zM77.75 97.255l-21.561.767 20.5 1.139 1.061-1.906zM75.177 101.813l-21.534.756 20.475 1.138 1.059-1.894zM72.657 106.348l-21.561.768 20.451 1.136 1.11-1.904zM99.014 69.92l-27.454.977 27.532 1.53-.078-2.507zM98.84 65.434l-24.663.865 24.741 1.419-.078-2.284zM98.664 61.107l-21.974.723 22.08 1.226-.106-1.949zM98.516 56.665l-19.261.644 19.337 1.142-.076-1.786zM98.391 53.074H81.639l16.777.89-.025-.89zM70.059 110.881l-21.509.779h21.07l.439-.779z" />
                <path d="M142.953 53.219h-30.998l-.879 1.556 15.512.823c.182 0 .182.258-.078.258l-16.338.546-1.576 2.758 15.406.91c.207.026.156.31-.025.31l-16.365.538-1.523 2.641 15.381.854c.336.026.336.311 0 .311l-16.338.573-1.551 2.762 15.33.879c.336.026.311.336 0 .336l-16.338.582-1.578 2.728 15.355.853c.232.026.26.311-.051.311l-47.077 1.577 44.673 2.482c.283 0 .258.362-.053.362L66.689 79.85l44.673 2.481c.207 0 .258.336-.053.336l-47.231 1.706 44.673 2.482c.182.026.361.362-.025.388L61.57 88.921l44.672 2.481c.129.026.258.362-.051.362l-23.733.846.078 2.142 21.147 1.175c.154.026.232.336-.053.336l-21.016.747.103 2.396 18.356 1.02c.18.026.258.388-.053.388l-18.2.639.079 2.629 15.641.869c.18.025.232.361-.078.361l-15.485.553.103 2.892 12.926.718c.182.026.182.337-.077.337l-12.797.463.052 1.243h41.726c11.064 0 20.99-8.066 22.852-14.478 1.863-6.411 1.863-12.202-7.031-15.097 4.965-1.138 13.598-6.737 15.305-14.478 1.548-7.033-1.036-14.22-13.083-14.246zm-20.988 44.9h-12.822l7.238-12.823h9.514c9.824 0 5.066 12.823-3.93 12.823zm16.596-27.509c-.414 1.551-3.518 5.481-7.445 5.481h-9.514l6.1-10.754h4.861c6.203.207 6.41 3.723 5.998 5.273zM189.922 130.099c0-4.969-4.131-9.131-9.1-9.131-5.098 0-9.26 4.228-9.26 9.422a9.253 9.253 0 0 0 9.293 9.292c3.773 0 7.355-2.581 8.42-6.098h-4.711c-.936 1.484-2.16 2.161-3.84 2.161-2.129 0-4.031-1.452-4.645-3.517h13.615c.163-.999.228-1.484.228-2.129zm-13.971-1.244c.613-2.42 2.549-3.969 4.936-3.969 2.389 0 4.26 1.517 4.84 3.969h-9.776zM128.756 121.829v1.449c-1.354-1.452-3.316-2.278-5.414-2.278-4.646 0-8.607 3.968-8.607 9.131 0 4.871 3.504 9.24 8.699 9.24 2.291 0 4.033-.529 5.678-2.4v2.291h3.938v-17.433h-4.294zm-4.809 13.847a5.41 5.41 0 1 1 0-10.821 5.41 5.41 0 0 1 0 10.821zM11.417 120.967c-1.774 0-3.129.613-4.614 2.13v-1.71H2.834v17.875h4.292v-8.422c0-2.29.193-5.937 3.355-5.937 2.968 0 3.291 3.42 3.291 5.614v8.744h4.291v-9.583c0-2.517-.193-3.71-.871-5.13-1-2.129-3.355-3.581-5.775-3.581zM38.081 130.099c0-4.969-4.13-9.131-9.099-9.131-5.098 0-9.26 4.228-9.26 9.422a9.254 9.254 0 0 0 9.292 9.292c3.775 0 7.356-2.581 8.421-6.098h-4.71c-.936 1.484-2.162 2.161-3.84 2.161-2.129 0-4.033-1.452-4.646-3.517h13.615c.163-.999.227-1.484.227-2.129zm-13.97-1.244c.613-2.42 2.549-3.969 4.937-3.969s4.259 1.517 4.84 3.969h-9.777zM108.686 139.247h4.291v-23.844h-4.291v23.844zM144.371 120.967c-1.775 0-3.131.613-4.615 2.13v-1.71h-3.969v17.875h4.293v-8.422c0-2.29.193-5.937 3.355-5.937 2.967 0 3.291 3.42 3.291 5.614v8.744h4.291v-9.583c0-2.517-.193-3.71-.871-5.13-1-2.129-3.355-3.581-5.775-3.581zM161.729 124.904c1.967 0 3.096.646 4.162 2.452h4.838c-1.322-3.839-4.709-6.389-8.84-6.389-5.227 0-9.422 4.162-9.422 9.293 0 5.162 4.227 9.421 9.422 9.421a9.579 9.579 0 0 0 7.033-3.13c.904-1 1.227-1.581 1.807-3.161h-4.838c-1.002 1.548-2.291 2.354-3.904 2.354-3.002 0-5.227-2.323-5.227-5.421 0-3.128 2.129-5.419 4.969-5.419zM54.483 132.293l-3.039-10.905h-3.453l-3.072 10.905-3.633-10.905H37.5l5.968 17.874h2.749l3.485-11.582 3.387 11.582h2.885l5.723-17.874h-3.548l-3.666 10.905zM77.474 120.986c-2.097 0-4.059.826-5.414 2.277v-7.859h-4.292v23.843h3.936v-2.29c1.646 1.871 3.388 2.399 5.679 2.399 5.195 0 8.699-4.368 8.699-9.24.001-5.162-3.961-9.13-8.608-9.13zm-.605 14.69a5.41 5.41 0 1 1 0-10.821 5.41 5.41 0 0 1 0 10.821zM101.527 121.829v1.449c-1.355-1.452-3.316-2.278-5.414-2.278-4.646 0-8.609 3.968-8.609 9.131 0 4.871 3.505 9.24 8.699 9.24 2.291 0 4.033-.529 5.679-2.4v2.291h3.936v-17.433h-4.291zm-4.808 13.847a5.41 5.41 0 1 1 0-10.821 5.41 5.41 0 0 1 0 10.821z" />
              </g>
            </svg>

            <svg className="laign h-auto mx-auto etpzx text-gray-800 dark:text-neutral-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 192.744 192.744">
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path d="M119.305 64.872v-3.816h-15.266v20.952h15.266v-3.456h-11.018v-5.688h9.649V69.12h-9.649v-4.248h11.018zM115.057 84.168v8.064h-8.354v-8.064h-4.318v20.881h4.318v-9.361h8.354v9.361h4.248V84.168h-4.248zM119.305 110.951v-3.742h-15.266v21.238h15.266v-3.814h-11.018v-5.617h9.649v-3.455h-9.649v-4.61h11.018zM101.592 61.056h-4.248v8.064h-8.352v-8.064h-4.248v20.952h4.248v-9.36h8.352v9.36h4.248V61.056zM66.456 61.056v3.816h6.48v17.136h4.248V64.872h6.48v-3.816H66.456zM53.064 83.592c-6.696 0-10.224 3.816-10.224 11.016 0 7.56 3.528 11.304 10.224 11.304s10.152-3.744 10.152-11.304c0-7.2-3.456-11.016-10.152-11.016zm-5.616 11.016c0-4.824 1.872-7.2 5.616-7.2 4.032 0 5.904 2.376 5.904 7.2 0 5.113-1.872 7.56-5.904 7.56-3.744 0-5.616-2.447-5.616-7.56zM36.72 84.168v14.76l-8.352-14.76h-4.536v20.881h4.032V90.36l8.568 14.689h4.536V84.168H36.72zM56.52 115.848v-4.897h10.728v-3.742H52.272v21.238h4.248v-8.855h9.432v-3.744H56.52zM100.801 87.912v-3.744H83.664v3.744h6.408v17.137h4.32V87.912h6.409zM74.232 97.057c1.368 0 2.448.215 2.952.791l.792 7.201H82.8v-.504c-.504-.289-.792-1.584-.792-4.033 0-2.951-1.08-4.536-2.664-5.328 2.16-.864 3.24-2.448 3.24-5.112 0-3.744-2.16-5.904-6.696-5.904H65.376v20.881h4.32v-7.992h4.536zm-4.536-3.529v-5.616h5.328c2.16 0 3.24.792 3.24 2.664s-1.08 2.952-3.456 2.952h-5.112zM77.184 107.209h-5.112l-7.488 21.238h4.536l1.656-4.607h7.776l1.296 4.607h4.608l-7.272-21.238zm-2.664 4.822l2.664 8.354h-5.328l2.664-8.354zM98.137 114.191h4.248c-.217-1.871-.793-3.455-2.09-4.824-1.871-1.584-4.031-2.664-6.983-2.664s-5.112 1.08-6.984 2.953c-1.584 1.871-2.664 4.535-2.664 8.064 0 7.488 3.168 11.23 9.36 11.23 5.4 0 8.351-2.664 9.361-7.775h-4.248c-.576 2.447-2.449 3.744-4.825 3.744-3.528 0-5.112-2.375-5.112-6.984 0-5.039 1.584-7.488 5.112-7.488 2.376 0 3.745 1.369 4.825 3.744zM44.712 128.16h.072-.072zm.072 0c.72 0 1.296-.289 1.729-.648.36-.432.647-1.008.647-1.799 0-.865-.288-1.441-.647-1.801-.432-.359-1.008-.576-1.729-.576h-.072c-.864 0-1.44.217-1.8.576-.359.359-.576.936-.576 1.801v.07c0 .721.216 1.297.576 1.729.36.359.937.648 1.8.648h.072zm-.072.576c-1.008 0-1.728-.359-2.232-.865-.504-.504-.72-1.223-.72-2.088v-.07c0-1.01.216-1.729.72-2.232.504-.504 1.224-.721 2.232-.721h.072c.864 0 1.584.217 2.088.721s.864 1.223.864 2.232c0 .936-.36 1.654-.864 2.158a2.921 2.921 0 0 1-2.088.865h-.072zm.288-3.312h.072c.288 0 .432-.145.432-.504v-.072s-.072 0-.072-.072c-.072-.072-.216-.072-.432-.072h-.792v.721H45v-.001zm.504.504l.576.721c.072.143 0 .287-.072.359-.144.145-.36.072-.432 0l-.72-1.008h-.648v.791c0 .145-.144.289-.288.289s-.288-.145-.288-.289v-2.375c0-.145.144-.287.288-.287H45.072c.288 0 .576.07.72.215.072.072.144.072.144.145.144.145.144.287.144.432 0 .575-.144.862-.576 1.007zM122.256 61.056c13.393 0 24.984 4.896 34.344 14.256 9.648 9.648 14.473 21.168 14.473 34.631v18.504h-19.584v-19.08c0-7.486-2.664-13.967-8.064-19.295-1.297-1.368-2.664-2.448-4.248-3.528-4.32-2.952-9.432-4.248-14.76-4.248h-2.16v-21.24h-.001zm27.359 67.391h-15.264v-14.76c0-2.447-.791-4.32-2.447-5.904-1.584-1.654-3.744-2.447-5.904-2.447h-3.744V84.168h2.16c5.615 0 10.439 1.584 14.76 4.824 1.08.504 2.16 1.584 2.951 2.376 5.113 5.113 7.488 11.017 7.488 18v19.079zm-17.135 0h-10.225v-21.238H126c1.656 0 3.24.574 4.607 1.871 1.08 1.08 1.873 2.736 1.873 4.607v14.76z" />
              </g>
            </svg>

            <svg className="laign h-auto mx-auto etpzx text-gray-800 dark:text-neutral-200" viewBox="0 0 48 37" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon">
              <path fill="currentColor" d="M47.689.517c-.834-1.066-2.291-.213-2.933.16-4.569 2.692-5.243 7.432-6.834 10.154-1.253 2.178-3.304 3.779-5.159 3.903-1.373.098-2.861-.167-4.338-.81-3.613-1.562-5.56-3.583-6.034-3.94-.973-.739-8.459-8.03-14.559-8.327 0 0-.744-1.5-.93-1.526C6.457.08 6 1.033 5.669 1.133c-.3.105-.825-1.024-1.13-.975C4.233.2 3.936 1.33 3.34 1.913c-.439.425-.973.398-1.275.926-.104.192-.068.53-.186.84-.253.641-1.102.708-1.11 1.394 0 .762.714.907 1.338 1.438.496.425.53.725 1.109.924.515.176 1.264-.374 1.928-.177.553.163 1.085.279 1.204.846.108.513 0 1.316-.682 1.226-.222-.03-1.194-.348-2.395-.22-1.45.154-3.105.618-3.267 2.22-.083.895 1.028 1.942 2.11 1.733.742-.143.392-1.013.797-1.433.535-.541 3.545 1.888 6.344 1.888 1.186 0 2.063-.3 2.935-1.21.078-.057.185-.203.31-.218.113.015.324.128.39.175 2.262 1.793 3.967 5.399 12.26 5.441 1.164.014 2.498.558 3.591 1.553.96.866 1.528 2.251 2.075 3.65.836 2.106 2.322 4.139 4.584 6.407.119.135 1.98 1.561 2.119 1.666.025.021.168.334.106.51-.039 1.38-.245 5.34 2.731 5.506.731.04.549-.463.549-.82-.01-.683-.129-1.371.226-2.08.507-.957-1.051-1.418-1.017-3.513.037-1.567-1.291-1.302-1.969-2.498-.381-.687-.736-1.065-.699-1.894.145-4.76-1.034-7.896-1.61-8.654-.455-.587-.847-.806-.414-1.078 2.481-1.632 3.05-3.15 3.05-3.15 1.32-3.081 2.512-5.89 4.15-7.138.332-.241 1.177-.88 1.703-1.12 1.527-.725 2.346-1.156 2.777-1.576.711-.675 1.27-2.107.588-2.96h-.001z" />
            </svg>

            <svg className="laign h-auto mx-auto etpzx text-gray-800 dark:text-neutral-200" fill="none" xmlns="http://www.w3.org/2000/svg" width="2500" height="1689" viewBox="0 0 22.071 14.913">
              <g fill="currentColor">
                <path d="M8.702 6.719c.179-.139.399-.179.598-.259.18-.1.24-.3.18-.499-.02-.08-.06-.14-.14-.16-.299-.08-.559.08-.858.04-.06-.02-.12-.06-.12-.12.04-.219.1-.439.18-.659.459-1.117.998-2.175 1.477-3.272.1-.279.3-.559.2-.858-.08-.28-.459-.2-.678-.12-.261.12-.48.279-.72.418-.14.08-.319.04-.459.12-.419.3-.579.759-.778 1.178-.239.459-.399.918-.599 1.377-.339.799-.738 1.557-1.097 2.355l-1.94.438s1.38-3.232 1.959-4.889c.02-.08 0-.2-.06-.259-.22-.18-.519-.08-.758 0-.439 1.018-.862 2.023-1.317 3.054-.299.678-.474 1.002-.733 1.701-.04.1-.225.674-.225.674-1.12.412-1.69.562-2.575.838-.059.259-.199.479-.239.739.219.02.479 0 .658.08.14.06.06.299.16.419.22.18.499.24.679.479.1.12.12.279.12.439-.02.439-.239.838-.379 1.277a42.17 42.17 0 0 1-.579 1.696c-.06.16.04.339.08.499.06.1.18.159.299.08.1-.08.16-.2.22-.299.2-.399.339-.798.499-1.197.339-.918.619-1.836.958-2.754.678-.14 1.337-.339 2.036-.339.04 0 .02.1.02.16-.339 1.397-.818 2.615-1.137 3.992-.04.12-.08.279-.02.339.379.379.698.758.998 1.217.02.02.06.04.1.04.14.02.299.02.419.02.16-.02.18-.26.24-.399.539-1.257.858-2.535 1.257-3.832.14-.419.279-.818.399-1.257.1-.399.2-.778.359-1.157.06-.12.16-.2.259-.28.338-.382.637-.76 1.057-1.06zM21.894.272c-.24-.359-.759-.279-1.058-.06-.798.599-.958 1.557-1.337 2.395-.1.2-.22.379-.299.559-.938 1.956-1.677 3.912-2.595 5.868-.206.411-.349.848-.519 1.337-.02.02-.04.02-.06.04-.06-.12-.24-.2-.22-.339.1-1.696.339-3.333.559-5.05.06-.399.12-.758.2-1.157.08-.479.2-.878.299-1.357.08-.339.1-.658.12-.998 0-.339.02-.719-.12-1.038-.1-.24-.299-.539-.619-.459-.12.04-.219.14-.339.18-.339.08-.798-.02-.958.339-1.237 2.954-2.192 5.938-3.073 9.021-.12.419-.279.798-.339 1.237-.06.399-.16.758-.24 1.158-.08.459-.259.878-.299 1.337-.04.239-.04.459-.021.698.075.22.504-.03.639-.219.06-.439.16-.858.26-1.317.18-.938.459-1.796.738-2.694a46.64 46.64 0 0 1 1.437-3.952c.04-.12.06-.28.2-.379 0 .878-.16 1.736-.18 2.615-.02 1.337-.08 2.654-.08 3.992 0 .14.14.219.24.319.399.319.785.605 1.011 1.064.044.089.187-.067.266-.146.2-.22.359-.479.459-.739.219-.519.419-1.018.639-1.537.738-1.716 1.477-3.413 2.335-5.069.02.02.04.04.04.06-.259 2.595-.758 5.09-.898 7.664 0 .14.16.24.219.359.14.339.299.679.619.858.24.12.559.02.639-.22.04-.18.04-.379.06-.579.04-.2.1-.399.12-.599.08-.519.18-.998.279-1.537.14-.838.279-1.597.439-2.435.519-2.754 1.038-5.229 1.537-7.983.079-.418.159-.877-.1-1.237zM10.338 10.122c-.275-.092-.536.248-.698.429-.1-.18-.18-.459-.04-.599.281-.281.391-.498.26-.918-.12-.419-.659-.519-1.038-.379-.273.095-.381.467-.355.803.01.138.042.27.095.375.04.08.08.219.14.299-.257.07-.671.567-.923 1.085-.129.266-.215.538-.215.761 0 .419.589.698.938.588.235-.074.399-.239.619-.359.2.159.339.379.579.539.021 0 .06 0 .06-.02.08-.399-.1-.798.08-1.138.14-.239.359-.399.519-.639.167-.251.26-.744-.021-.827zm-1.357 1.367c-.02.16-.16.22-.319.259-.08.02-.16-.02-.22-.1a.32.32 0 0 1-.035-.254.69.69 0 0 1 .095-.205c.06-.1.202-.167.319-.12.2.081.2.261.16.42zm.279-1.856c-.098-.025-.16-.128-.197-.234a.917.917 0 0 1-.042-.185c-.012-.101.08-.188.18-.18.115.01.279.08.259.24-.02.14-.04.379-.2.359z" />
              </g>
            </svg>
          </div>
        </div>

        <div className="w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="n8xpr hovfi qox4a b2ubo mx-auto dtief">
            <h2 className="font-semibold text-xl iqo6n text-gray-800 dark:text-neutral-200">
              Shoes by classics
            </h2>
          </div>

          <div data-hs-carousel='{
            "loadingClasses": "opacity-0",
            "slidesQty": {
              "xs": 2,
              "sm": 3,
              "md": 4,
              "lg": 5,
              "xl": 6
            },
            "isSnap": true,
            "hasSnapSpacers": false
          }' className="relative">
            <div className="overflow-x-hidden">
              <div className="-mx-1 mpze3">
                <div className="hs-carousel w-full flex sbso4 sa2ld i6bn4 overflow-x-auto ndnt5 y0qzi bpysz lwuhe basss bxgd5 k0qok dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-200">
                  <div className="hs-carousel-body flex flex-nowrap opacity-0 oeanj mx4xe">
                    <div className="hs-carousel-slide c44he eoh5b ptmfq">
                      <a className="relative block group focus:outline-hidden" href="#">
                        <div className="overflow-hidden er6t7">
                          <img className="w-full xdkn9 x1s1r er6t7 group-hover:scale-105 group-focus:scale-105 oeanj ys1w3 resz6" src="https://images.unsplash.com/photo-1606890542241-b848582fe5cd?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                        </div>
                        <div className="absolute inset-0">
                          <div className="h-full flex flex-col justify-center items-center">
                            <span className="ga1u8 f2l40 bg-white text-gray-800 xs2f2 vj9jb rounded-full">
                              Air Jordan
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="hs-carousel-slide c44he eoh5b ptmfq">
                      <a className="relative block group focus:outline-hidden" href="#">
                        <div className="overflow-hidden er6t7">
                          <img className="w-full xdkn9 x1s1r er6t7 group-hover:scale-105 group-focus:scale-105 oeanj ys1w3 resz6" src="https://images.unsplash.com/photo-1704949834515-e9d11a0ceb9a?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                        </div>
                        <div className="absolute inset-0">
                          <div className="h-full flex flex-col justify-center items-center">
                            <span className="ga1u8 f2l40 bg-white text-gray-800 xs2f2 vj9jb rounded-full">
                              Air Jordan 1
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="hs-carousel-slide c44he eoh5b ptmfq">
                      <a className="relative block group focus:outline-hidden" href="#">
                        <div className="overflow-hidden er6t7">
                          <img className="w-full xdkn9 x1s1r er6t7 group-hover:scale-105 group-focus:scale-105 oeanj ys1w3 resz6" src="https://images.unsplash.com/photo-1695686331766-16a2c3c2c382?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                        </div>
                        <div className="absolute inset-0">
                          <div className="h-full flex flex-col justify-center items-center">
                            <span className="ga1u8 f2l40 bg-white text-gray-800 xs2f2 vj9jb rounded-full">
                              Dunk
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="hs-carousel-slide c44he eoh5b ptmfq">
                      <a className="relative block group focus:outline-hidden" href="#">
                        <div className="overflow-hidden er6t7">
                          <img className="w-full xdkn9 x1s1r er6t7 group-hover:scale-105 group-focus:scale-105 oeanj ys1w3 resz6" src="https://images.unsplash.com/photo-1699595749116-33a4a869503c?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                        </div>
                        <div className="absolute inset-0">
                          <div className="h-full flex flex-col justify-center items-center">
                            <span className="ga1u8 f2l40 bg-white text-gray-800 xs2f2 vj9jb rounded-full">
                              Air Force 1
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="hs-carousel-slide c44he eoh5b ptmfq">
                      <a className="relative block group focus:outline-hidden" href="#">
                        <div className="overflow-hidden er6t7">
                          <img className="w-full xdkn9 x1s1r er6t7 group-hover:scale-105 group-focus:scale-105 oeanj ys1w3 resz6" src="https://images.unsplash.com/photo-1699593022913-7068606059c8?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                        </div>
                        <div className="absolute inset-0">
                          <div className="h-full flex flex-col justify-center items-center">
                            <span className="ga1u8 f2l40 bg-white text-gray-800 xs2f2 vj9jb rounded-full">
                              Blazer
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="hs-carousel-slide c44he eoh5b ptmfq">
                      <a className="relative block group focus:outline-hidden" href="#">
                        <div className="overflow-hidden er6t7">
                          <img className="w-full xdkn9 x1s1r er6t7 group-hover:scale-105 group-focus:scale-105 oeanj ys1w3 resz6" src="https://images.unsplash.com/photo-1700853012811-ce0a42d2b6d3?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category Image" />
                        </div>
                        <div className="absolute inset-0">
                          <div className="h-full flex flex-col justify-center items-center">
                            <span className="ga1u8 f2l40 bg-white text-gray-800 xs2f2 vj9jb rounded-full">
                              Adidas
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default xl:hidden absolute zoyba xviih inline-flex justify-center items-center fjwwc bg-white rsdjd rxmp4 text-gray-800 rounded-full hj07t d05xb -translate-y-1/2 focus:outline-hidden">
              <span className="f8p8s" aria-hidden="true">
                <svg className="shrink-0 yhc35" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </span>
              <span className="et50x">Previous</span>
            </button>
            <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default xl:hidden absolute zoyba tb54y inline-flex justify-center items-center fjwwc bg-white rsdjd rxmp4 text-gray-800 rounded-full hj07t d05xb -translate-y-1/2 focus:outline-hidden">
              <span className="et50x">Next</span>
              <span className="f8p8s" aria-hidden="true">
                <svg className="shrink-0 yhc35" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="p30n2 y95gc w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="ylm8n hjdn7 vdd7r yb2jh f8pfl">
            <div className="x5nwc lg:max-w-full mx-auto dtief vwphm a6tf7">
              <svg className="shrink-0 qqwrg mx-auto text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className="wc6fu sikx1 text-gray-800 dark:text-neutral-200">
                Secure checkout
              </p>
              <p className="ja90s text-sm jy5gh dark:text-neutral-500">
                Shop with confidence using our encrypted payment system that protects your sensitive information.
              </p>
            </div>

            <div className="x5nwc lg:max-w-full mx-auto dtief vwphm a6tf7">
              <svg className="shrink-0 qqwrg mx-auto text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
              <p className="wc6fu sikx1 text-gray-800 dark:text-neutral-200">
                Free shipping
              </p>
              <p className="ja90s text-sm jy5gh dark:text-neutral-500">
                Enjoy complimentary delivery&nbsp;on all orders, with no minimum purchase required.
              </p>
            </div>

            <div className="x5nwc lg:max-w-full mx-auto dtief vwphm a6tf7">
              <svg className="shrink-0 qqwrg mx-auto text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              <p className="wc6fu sikx1 text-gray-800 dark:text-neutral-200">
                30 days return
              </p>
              <p className="ja90s text-sm jy5gh dark:text-neutral-500">
                Not satisfied? Return any item within 30 days of purchase for a full refund or exchange.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto  bg-white yfv61 border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
        <div className="w-full max-w-[85rem] mx-auto beg37 s64f7 px-4 sm:px-6 lg:px-8">
          <div className="hl65v flex flex-col g27d7">
            <div className="b2ubo">
              <label htmlFor="hs-pro-shfsei" className="block wyf4w sikx1 text-gray-800 dark:text-neutral-200">
                Subscribe &amp; get 10% off
              </label>

              <div className="flex items-center o4ndh">
                <input id="hs-pro-shfsei" type="text" className="py-3 px-4 block w-full border-gray-200 rounded-lg glhrq bj1nl o0e5q m5fuw disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder-neutral-600 dark:focus:ring-neutral-600" placeholder="Enter email address" />
                <button type="button" className="py-3 px-4 s1lil inline-flex justify-center items-center gap-x-2 glhrq sikx1 rounded-lg rsdjd azddh y73k3 kew0r xengx disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden xo3eb dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                  Sign up
                </button>
              </div>
            </div>
          </div>

          <div className="ylm8n hjdn7 fafsg uyidg n60o7 r9tor">
            <div>
              <h4 className="n8xpr sikx1 text-sm text-gray-800 dark:text-neutral-200">Help</h4>

              <ul className="ylm8n space-y-2">
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Help Center</a></li>
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">FAQs</a></li>
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Subscription</a></li>
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Order Status</a></li>
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Returns &amp; Exchanges</a></li>
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="n8xpr sikx1 text-sm text-gray-800 dark:text-neutral-200">Resources</h4>

              <ul className="ylm8n space-y-2">
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Gift Cards</a></li>
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Find a Store</a></li>
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Membership</a></li>
              </ul>
            </div>

            <div>
              <h4 className="n8xpr sikx1 text-sm text-gray-800 dark:text-neutral-200">Company</h4>

              <ul className="ylm8n space-y-2">
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Newsroom</a></li>
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">New features</a></li>
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Careers</a></li>
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Investors</a></li>
                <li><a className="text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Purpose</a></li>
              </ul>
            </div>

            <div className="space-y-10">
              <div className="space-y-3">
                <button type="button" className="flex items-center b1nd2 text-start text-sm text-gray-800 ovpiy focus:outline-hidden eh0ki dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" data-hs-overlay="#hs-pro-shnlm">
                  <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>

                  Location
                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>

                <button type="button" className="flex items-center b1nd2 text-start text-sm text-gray-800 ovpiy focus:outline-hidden eh0ki dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" data-hs-overlay="#hs-pro-shnrsm">
                  <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                  United Kingdom
                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>

                <button type="button" className="flex items-center b1nd2 text-start text-sm text-gray-800 ovpiy focus:outline-hidden eh0ki dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" data-hs-overlay="#hs-pro-shwrm">
                  <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Send us feedback
                  <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>

              <div>
                <h4 className="sikx1 text-sm text-gray-800 dark:text-neutral-200">Stay connected</h4>

                <div className="wc6fu dhkpo space-x-4">
                  <a className="relative inline-block text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">
                    <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="et50x">Instagram</span>
                  </a>
                  <a className="relative inline-block text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">
                    <svg className="shrink-0 h6zia" width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.5665 20.7714L46.4356 0H42.2012L26.6855 18.0355L14.2931 0H0L18.7397 27.2728L0 49.0548H4.23464L20.6196 30.0087L33.7069 49.0548H48L28.5655 20.7714H28.5665ZM22.7666 27.5131L5.76044 3.18778H12.2646L42.2032 46.012H35.699L22.7666 27.5142V27.5131Z" fill="currentColor" />
                    </svg>
                    <span className="et50x">X (Twitter)</span>
                  </a>
                  <a className="relative inline-block text-sm jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">
                    <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                    <span className="et50x">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[85rem] bdgsd jqiho mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap  items-center s1lil g27d7">
            <li className="inline-flex items-center relative xs2f2 jy5gh ssqu0 x3yuu last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2 dark:text-neutral-500 dark:after:bg-neutral-600">
              © 2025 Preline Labs.
            </li>
            <li className="inline-flex items-center relative xs2f2 jy5gh ssqu0 x3yuu last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2 dark:text-neutral-500 dark:after:bg-neutral-600">
              <a className="xs2f2 jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">
                Terms
              </a>
            </li>
            <li className="inline-flex items-center relative xs2f2 jy5gh ssqu0 x3yuu last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2 dark:text-neutral-500 dark:after:bg-neutral-600">
              <a className="xs2f2 jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">
                Privacy
              </a>
            </li>
            <li className="inline-flex items-center relative xs2f2 jy5gh ssqu0 x3yuu last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2 dark:text-neutral-500 dark:after:bg-neutral-600">
              <a className="xs2f2 jy5gh underline underline-offset-4 f1348 mg8vb focus:outline-hidden ow4j6 pwmu5 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">
                Your Privacy Choices
              </a>
            </li>
            <li className="inline-flex items-center relative xs2f2 jy5gh ssqu0 x3yuu last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2 dark:text-neutral-500 dark:after:bg-neutral-600">
              <button type="button" className="hs-dark-mode-active:hidden flex hs-dark-mode items-center b1nd2 text-sm jy5gh mg8vb focus:outline-hidden pwmu5 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-theme-click-value="dark">
                <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
                <span className="et50x">Dark mode</span>
              </button>
              <button type="button" className="hs-dark-mode-active:flex hidden hs-dark-mode items-center b1nd2 text-sm jy5gh mg8vb focus:outline-hidden pwmu5 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-theme-click-value="light">
                <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
                <span className="et50x">Light mode</span>
              </button>
            </li>
          </ul>
        </div>
      </footer>

      {/* <div id="hs-pro-shnsm" className="hs-overlay hidden w-full h-full fixed top-0 left-0 oc2zw overflow-x-hidden overflow-y-auto gxxgf" role="dialog" tabindex="-1" aria-label="Search">
        <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 ccbyv transition-all duration-300 ease-in-out ep3wt xl:w-full xzljp xl:mx-auto h-[calc(100%-56px)] min-h-[calc(100%-56px)] flex items-center">
          <div className="py-4 jh2ny xfuxu a0p67 relative w-full flex flex-col bg-white er6t7 pointer-events-auto gmg3v dark:bg-neutral-800">
            <div className="px-4 ozsmh e3s31">
              <div className="relative">
                <div className="absolute rm8lf left-0 flex items-center gxxgf gbcuh o1d90">
                  <svg className="shrink-0 b9gop rr36x dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input type="text" className="s53ws bi771 f2l40 nokqy block w-full f4yn1 azddh rounded-lg glhrq adszq focus:outline-hidden rr3j6 fogni j8yvm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:bg-neutral-800 dark:focus:ring-neutral-600" placeholder="Search" autofocus />
                <div className="hidden absolute rm8lf kji94 flex items-center gbcuh wn488">
                  <button type="button" className="inline-flex shrink-0 justify-center items-center odrp3 rounded-full jy5gh s5ku3 focus:outline-hidden i4yyh dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" aria-label="Close">
                    <span className="et50x">Close</span>
                    <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="px-4 ozsmh w350v overflow-y-auto overflow-hidden xwpzv y0qzi bxgd5 n3xnc dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <span className="edevu block text-sm jy5gh dark:text-neutral-500">
                Suggestions
              </span>

              <div className="ja90s -mx-2.5 el3yd space-y-1">

                <a className="block od5va sfv8v rounded-lg d05xb focus:outline-hidden r17tr dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                  <div className="flex gap-x-2">
                    <div className="shrink-0 odrp3 flex justify-center items-center">
                      <svg className="shrink-0 b9gop rr36x dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>

                    <div className="grow-1 eyzz7">
                      <div className="flex justify-between items-center gap-x-2">
                        <div className="grow-1">
                          <p className="text-sm jy5gh dark:text-neutral-500">
                            Men's <span className="sikx1 text-gray-800 dark:text-neutral-200">Nike Shoes</span>
                          </p>
                        </div>
                        <p className="xs2f2 jy5gh dark:text-neutral-500">
                          300
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a className="block od5va sfv8v rounded-lg d05xb focus:outline-hidden r17tr dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                  <div className="flex gap-x-2">
                    <div className="shrink-0 odrp3 flex justify-center items-center">
                      <svg className="shrink-0 b9gop rr36x dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>

                    <div className="grow-1 eyzz7">
                      <div className="flex justify-between items-center gap-x-2">
                        <div className="grow-1">
                          <p className="text-sm jy5gh dark:text-neutral-500">
                            Women's <span className="sikx1 text-gray-800 dark:text-neutral-200">Nike Shoes</span>
                          </p>
                        </div>
                        <p className="xs2f2 jy5gh dark:text-neutral-500">
                          253
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a className="block od5va sfv8v rounded-lg d05xb focus:outline-hidden r17tr dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                  <div className="flex gap-x-2">
                    <div className="shrink-0 odrp3 flex justify-center items-center">
                      <svg className="shrink-0 b9gop rr36x dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>

                    <div className="grow-1 eyzz7">
                      <div className="flex justify-between items-center gap-x-2">
                        <div className="grow-1">
                          <p className="text-sm jy5gh dark:text-neutral-500">
                            <span className="sikx1 text-gray-800 dark:text-neutral-200">Nike Shoes</span>
                          </p>
                        </div>
                        <p className="xs2f2 jy5gh dark:text-neutral-500">
                          61
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a className="block od5va sfv8v rounded-lg d05xb focus:outline-hidden r17tr dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                  <div className="flex gap-x-2">
                    <div className="shrink-0 odrp3 flex justify-center items-center">
                      <svg className="shrink-0 b9gop rr36x dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>

                    <div className="grow-1 eyzz7">
                      <div className="flex justify-between items-center gap-x-2">
                        <div className="grow-1">
                          <p className="text-sm jy5gh dark:text-neutral-500">
                            Soccer <span className="sikx1 text-gray-800 dark:text-neutral-200">Nike Shoes</span>
                          </p>
                        </div>
                        <p className="xs2f2 jy5gh dark:text-neutral-500">
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a className="block od5va sfv8v rounded-lg d05xb focus:outline-hidden r17tr dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                  <div className="flex gap-x-2">
                    <div className="shrink-0 odrp3 flex justify-center items-center">
                      <svg className="shrink-0 b9gop rr36x dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>

                    <div className="grow-1 eyzz7">
                      <div className="flex justify-between items-center gap-x-2">
                        <div className="grow-1">
                          <p className="text-sm jy5gh dark:text-neutral-500">
                            Running <span className="sikx1 text-gray-800 dark:text-neutral-200">Nike Shoes</span>
                          </p>
                        </div>
                        <p className="xs2f2 jy5gh dark:text-neutral-500">
                          84
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a className="block od5va sfv8v rounded-lg d05xb focus:outline-hidden r17tr dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                  <div className="flex gap-x-2">
                    <div className="shrink-0 odrp3 flex justify-center items-center">
                      <svg className="shrink-0 b9gop rr36x dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>

                    <div className="grow-1 eyzz7">
                      <div className="flex justify-between items-center gap-x-2">
                        <div className="grow-1">
                          <p className="text-sm jy5gh dark:text-neutral-500">
                            Golf <span className="sikx1 text-gray-800 dark:text-neutral-200">Nike Shoes</span>
                          </p>
                        </div>
                        <p className="xs2f2 jy5gh dark:text-neutral-500">
                          97
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="tm9ta">
                <div data-hs-carousel='{
                  "loadingClasses": "opacity-0",
                  "slidesQty": {
                    "xs": 2,
                    "sm": 3
                  },
                  "hasSnapSpacers": false,
                  "isDraggable": true
                }' className="relative">
                  <div className="hs-carousel w-full max-w-full overflow-hidden">
                    <div className="hs-carousel-body flex flex-nowrap g27d7 gbedp opacity-0 oeanj mx4xe tv623 zqex4 ngv94">
                      <div className="hs-carousel-slide">
                        <a className="group block relative h-full er6t7 focus:outline-hidden" href="../../pro/shop/product-page.html">
                          <img className="shrink-0 f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1699595749116-33a4a869503c?q=80&w=560&h=380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                          <div className="absolute gvmr9 tb54y gxxgf">
                            <span className="ga1u8 u4i8k mx6w2 bg-white sikx1 xs2f2 text-gray-800 rounded-full hj07t dark:bg-neutral-900 dark:text-neutral-200">
                              🔥 Trending
                            </span>
                          </div>
                          <div className="f5e2w">
                            <span className="block sikx1 text-sm cve4m text-gray-800 group-hover:text-indigo-600 group-focus:text-indigo-600 dark:text-neutral-200 dark:group-hover:text-indigo-400 dark:group-focus:text-indigo-400">
                              Air Force 1
                            </span>
                            <p className="text-sm jy5gh dark:text-neutral-400">
                              Women's Shoes
                            </p>
                            <p className="rwavo text-sm">
                              <span className="text-sm jy5gh dark:text-neutral-500">
                                <s>$220</s>
                              </span>
                              <span className="sikx1 text-sm jmzb2">
                                $190
                              </span>
                            </p>
                          </div>
                        </a>
                      </div>

                      <div className="hs-carousel-slide">
                        <a className="group block relative h-full er6t7 focus:outline-hidden" href="../../pro/shop/product-page.html">
                          <img className="shrink-0 f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1699593022913-7068606059c8?q=80&w=560&h=380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                          <div className="absolute gvmr9 tb54y gxxgf">
                            <span className="ga1u8 u4i8k mx6w2 bg-white sikx1 xs2f2 text-gray-800 rounded-full hj07t dark:bg-neutral-900 dark:text-neutral-200">
                              🔥 Trending
                            </span>
                          </div>
                          <div className="f5e2w">
                            <span className="block sikx1 text-sm cve4m text-gray-800 group-hover:text-indigo-600 group-focus:text-indigo-600 dark:text-neutral-200 dark:group-hover:text-indigo-400 dark:group-focus:text-indigo-400">
                              Blazer
                            </span>
                            <p className="text-sm jy5gh dark:text-neutral-400">
                              Men's Shoes
                            </p>
                            <p className="rwavo sikx1 text-sm text-gray-800 dark:text-neutral-200">
                              $110
                            </p>
                          </div>
                        </a>
                      </div>

                      <div className="hs-carousel-slide">
                        <a className="group block relative h-full er6t7 focus:outline-hidden" href="../../pro/shop/product-page.html">
                          <img className="shrink-0 f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1700853012811-ce0a42d2b6d3?q=80&w=560&h=380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                          <div className="absolute gvmr9 tb54y gxxgf">
                            <span className="ga1u8 u4i8k mx6w2 bg-white sikx1 xs2f2 text-gray-800 rounded-full hj07t dark:bg-neutral-900 dark:text-neutral-200">
                              🔥 Trending
                            </span>
                          </div>
                          <div className="f5e2w">
                            <span className="block sikx1 text-sm cve4m text-gray-800 group-hover:text-indigo-600 group-focus:text-indigo-600 dark:text-neutral-200 dark:group-hover:text-indigo-400 dark:group-focus:text-indigo-400">
                              Adidas
                            </span>
                            <p className="text-sm jy5gh dark:text-neutral-400">
                              Kid's Shoes
                            </p>
                            <p className="rwavo sikx1 text-sm text-gray-800 dark:text-neutral-200">
                              $69
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="sm:hidden">
                    <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute zoyba xviih inline-flex justify-center items-center fjwwc bg-white rsdjd rxmp4 text-gray-800 rounded-full hj07t d05xb -translate-y-1/2 focus:outline-hidden">
                      <span className="f8p8s" aria-hidden="true">
                        <svg className="shrink-0 yhc35" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </span>
                      <span className="et50x">Previous</span>
                    </button>
                    <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute zoyba tb54y inline-flex justify-center items-center fjwwc bg-white rsdjd rxmp4 text-gray-800 rounded-full hj07t d05xb -translate-y-1/2 focus:outline-hidden">
                      <span className="et50x">Next</span>
                      <span className="f8p8s" aria-hidden="true">
                        <svg className="shrink-0 yhc35" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hs-pro-shnlm" className="hs-overlay hidden w-full h-full fixed top-0 left-0 oc2zw overflow-x-hidden overflow-y-auto [--close-when-click-inside:true] gxxgf" role="dialog" tabindex="-1" aria-labelledby="hs-pro-shnlm-label">
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 l6g2h opacity-0 ccbyv transition-all duration-300 ease-in-out c22e6 sm:w-full xzljp sm:mx-auto h-[calc(100%-56px)] min-h-[calc(100%-56px)] flex items-center">
          <div className="w-full a0p67 relative flex flex-col bg-white er6t7 pointer-events-auto gmg3v dark:bg-neutral-800">
            <div className="absolute t5i3j ez989 wzd7f">
              <button type="button" className="yl1cu shrink-0 flex justify-center items-center gap-x-2 rounded-full rsdjd azddh f4yn1 text-gray-800 cq7a3 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden f6db7 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-pro-shnlm">
                <span className="et50x">Close</span>
                <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto xwpzv y0qzi bxgd5 n3xnc dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="jq72l ljvct">
                <div className="r4xgm">
                  <svg className="shrink-0 fl6qw mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
                    <clipPath id="a">
                      <path d="M0 0v30h60V0z" />
                    </clipPath>
                    <clipPath id="b">
                      <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
                    </clipPath>
                    <g clip-path="url(#a)">
                      <path d="M0 0v30h60V0z" fill="#012169" />
                      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6" />
                      <path d="M0 0l60 30m0-30L0 30" clip-path="url(#b)" stroke="#C8102E" stroke-width="4" />
                      <path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10" />
                      <path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6" />
                    </g>
                  </svg>
                </div>

                <h4 id="hs-pro-shnlm-label" className="text-gray-800 dark:text-neutral-200">
                  Your location set to <span className="font-semibold">United Kingdom</span>
                </h4>

                <ul className="rwwei vdybs yuavq wc6fu space-y-1">
                  <li className="text-sm jy5gh dark:text-neutral-500">
                    Shop in GBP &#163;
                  </li>
                  <li className="text-sm jy5gh dark:text-neutral-500">
                    Get shipping options for United Kingdom
                  </li>
                </ul>

                <div className="chaem space-y-3">
                  <button type="button" className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm sikx1 rounded-lg rsdjd azddh lgr79 kew0r gocsw disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden yveoa" data-hs-overlay="#hs-pro-shnlm">
                    Continue
                  </button>

                  <div className="dtief">
                    <button type="button" className="inline-flex justify-center items-center sikx1 text-sm text-gray-800 l5oyh underline underline-offset-4 ai0xw iiod0 focus:outline-hidden s6w37 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400" data-hs-overlay="#hs-pro-shnrsm">
                      Change Country
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hs-pro-shnrsm" className="hs-overlay hidden w-full h-full fixed top-0 left-0 oc2zw overflow-x-hidden overflow-y-auto [--close-when-click-inside:true] gxxgf" role="dialog" tabindex="-1" aria-labelledby="hs-pro-shnrsm-label">
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 l6g2h opacity-0 ccbyv transition-all duration-300 ease-in-out c22e6 sm:w-full xzljp sm:mx-auto h-[calc(100%-56px)] min-h-[calc(100%-56px)] flex items-center">
          <div className="w-full a0p67 relative overflow-hidden flex flex-col bg-white er6t7 pointer-events-auto gmg3v dark:bg-neutral-800">
            <div className="py-4 px-6 wq9mm flex justify-between items-center border-bottom-2 border-gray-200 dark:border-neutral-700">
              <h3 id="hs-pro-shnrsm-label" className="sikx1 text-gray-800 dark:text-neutral-200">
                Which country would like to shop in?
              </h3>
              <button type="button" className="yl1cu shrink-0 flex justify-center items-center gap-x-2 rounded-full rsdjd azddh f4yn1 text-gray-800 cq7a3 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden f6db7 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-pro-shnrsm">
                <span className="et50x">Close</span>
                <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div id="hs-pro-shnlm-body" className="overflow-y-auto xwpzv y0qzi bxgd5 n3xnc dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="jq72l ljvct space-y-5">
                <div>
                  <label className="block wyf4w text-sm sikx1 text-gray-800 dark:text-neutral-200">
                    Language
                  </label>

                  <div className="relative">
                    <select id="hs-pro-select-language" data-hs-select='{
                      "placeholder": "Select country",
                      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><div data-icon></div></button>",
                      "dropdownClasses": "oc2zw w-full v6xgr rdef8 vyel6 space-y-0.5 z-50 w-full overflow-hidden overflow-y-auto bg-white er6t7 gmg3v xwpzv y0qzi bxgd5 n3xnc dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900",
                      
                      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 srbq1 ur1vp flex items-center gap-x-2 m6d8q w-full cursor-pointer bg-white rsdjd border-gray-200 rounded-lg text-start text-sm focus:outline-hidden zx3z8 m5fuw dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:outline-hidden dark:focus:ring-1 dark:focus:ring-neutral-600",
                      "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 s53ws px-4 w-full text-sm text-gray-800 cursor-pointer d05xb rounded-lg focus:outline-hidden r17tr dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                      "optionTemplate": "<div><div className=\"flex items-center gap-x-2 \"><div data-icon></div><div className=\"text-gray-800 dark:text-neutral-200 \" data-title></div><span className=\"hidden hs-selected:block ms-auto \"><svg className=\"shrink-0 h6zia text-gray-800 dark:text-neutral-200 \" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div></div>",
                      "dropdownScope": "window",
                      "viewport": "#hs-pro-shnlm-body"
                    }' className="hidden">
                      <option value="">Choose</option>
                      <option value="English-us" data-hs-select-option='{
                      "icon": "<svg className=\"shrink-0 b9gop rounded-full \" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><g fill-rule=\"evenodd\"><g stroke-width=\"1pt\"><path fill=\"#bd3d44\" d=\"M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z\" transform=\"scale(3.9385)\"/><path fill=\"#fff\" d=\"M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z\" transform=\"scale(3.9385)\"/></g><path fill=\"#192f5d\" d=\"M0 0h98.8v70H0z\" transform=\"scale(3.9385)\"/><path fill=\"#fff\" d=\"M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z\" transform=\"scale(3.9385)\"/></g></svg>"}'>
                        English (United States)
                      </option>
                      <option selected value="English-uk" data-hs-select-option='{
                      "icon": "<svg className=\"shrink-0 b9gop rounded-full \" xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icon-css-gb\" viewBox=\"0 0 512 512\"><path fill=\"#012169\" d=\"M0 0h512v512H0z\"/><path fill=\"#FFF\" d=\"M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z\"/><path fill=\"#C8102E\" d=\"M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8 150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z\"/><path fill=\"#FFF\" d=\"M176 0v512h160V0H176zM0 176v160h512V176H0z\"/><path fill=\"#C8102E\" d=\"M0 208v96h512v-96H0zM208 0v512h96V0h-96z\"/></svg>"}'>
                        English (United Kingdom)
                      </option>
                      <option value="Deutsch" data-hs-select-option='{
                      "icon": "<svg className=\"shrink-0 b9gop rounded-full \" xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icon-css-de\" viewBox=\"0 0 512 512\"><path fill=\"#ffce00\" d=\"M0 341.3h512V512H0z\"/><path d=\"M0 0h512v170.7H0z\"/><path fill=\"#d00\" d=\"M0 170.7h512v170.6H0z\"/></svg>"}'>
                        Deutsch
                      </option>
                      <option value="Dansk" data-hs-select-option='{
                      "icon": "<svg className=\"shrink-0 b9gop rounded-full \" xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icon-css-dk\" viewBox=\"0 0 512 512\"><path fill=\"#c8102e\" d=\"M0 0h512.1v512H0z\"/><path fill=\"#fff\" d=\"M144 0h73.1v512H144z\"/><path fill=\"#fff\" d=\"M0 219.4h512.1v73.2H0z\"/></svg>"}'>
                        Dansk
                      </option>
                      <option value="Italiano" data-hs-select-option='{
                      "icon": "<svg className=\"shrink-0 b9gop rounded-full \" xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icon-css-it\" viewBox=\"0 0 512 512\"><g fill-rule=\"evenodd\" stroke-width=\"1pt\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"/><path fill=\"#009246\" d=\"M0 0h170.7v512H0z\"/><path fill=\"#ce2b37\" d=\"M341.3 0H512v512H341.3z\"/></g></svg>"}'>
                        Italiano
                      </option>
                      <option value="中文-繁體" data-hs-select-option='{
                      "icon": "<svg className=\"shrink-0 b9gop rounded-full \" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"flag-icon-css-cn\" viewBox=\"0 0 512 512\"><defs><path id=\"a\" fill=\"#ffde00\" d=\"M1-.3L-.7.8 0-1 .6.8-1-.3z\"/></defs><path fill=\"#de2910\" d=\"M0 0h512v512H0z\"/><use width=\"30\" height=\"20\" transform=\"matrix(76.8 0 0 76.8 128 128)\" xlink:href=\"#a\"/><use width=\"30\" height=\"20\" transform=\"rotate(-121 142.6 -47) scale(25.5827)\" xlink:href=\"#a\"/><use width=\"30\" height=\"20\" transform=\"rotate(-98.1 198 -82) scale(25.6)\" xlink:href=\"#a\"/><use width=\"30\" height=\"20\" transform=\"rotate(-74 272.4 -114) scale(25.6137)\" xlink:href=\"#a\"/><use width=\"30\" height=\"20\" transform=\"matrix(16 -19.968 19.968 16 256 230.4)\" xlink:href=\"#a\"/></svg>"}'>
                        中文 (繁體)
                      </option>
                    </select>

                    <div className="absolute zoyba ez989 -translate-y-1/2">
                      <svg className="shrink-0 h6zia jy5gh dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m7 15 5 5 5-5" />
                        <path d="m7 9 5-5 5 5" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block wyf4w text-sm sikx1 text-gray-800 dark:text-neutral-200">
                    Country
                  </label>

                  <div className="relative">
                    <select data-hs-select='{
                        "placeholder": "",
                        "hasSearch": true,
                        "searchPlaceholder": "Country",
                        "searchClasses": "od5va yzhap f2l40 block w-full glhrq border-gray-200 rounded-lg o0e5q m5fuw dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400",
                        "searchWrapperClasses": "bg-white an00p -mx-1 sticky top-0 dark:bg-neutral-900",
                        "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span className=\"flex \" data-icon></span><span className=\"text-gray-800 dark:text-neutral-400 \" data-title></span></button>",
                        
                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 srbq1 ur1vp flex gap-x-2 m6d8q w-full cursor-pointer bg-white rsdjd border-gray-200 rounded-lg text-start text-sm focus:outline-hidden zx3z8 m5fuw dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:outline-hidden dark:focus:ring-1 dark:focus:ring-neutral-600",
                        "dropdownClasses": "oc2zw rdef8 vyel6 joa7s space-y-0.5 z-50 w-full overflow-hidden overflow-y-auto bg-white er6t7 gmg3v xwpzv y0qzi bxgd5 n3xnc dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900",
                        "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 s53ws px-4 w-full text-sm text-gray-800 cursor-pointer d05xb rounded-lg focus:outline-hidden r17tr dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                        "optionTemplate": "<div><div className=\"flex items-center \"><div className=\"hrvkp \" data-icon></div><div className=\"text-gray-800 dark:text-neutral-400 \" data-title></div></div></div>",
                        "dropdownScope": "window",
                        "viewport": "#hs-pro-shnlm-body"
                      }' className="hidden">
                      <option value="">Choose</option>
                      <option value="AF" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/af.png\" alt=\"Afghanistan\" />"}'>
                        Afghanistan
                      </option>
                      <option value="AX" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ax.png\" alt=\"Aland Islands\" />"}'>
                        Aland Islands
                      </option>
                      <option value="AL" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/al.png\" alt=\"Albania\" />"}'>
                        Albania
                      </option>
                      <option value="DZ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/dz.png\" alt=\"Algeria\" />"}'>
                        Algeria
                      </option>
                      <option value="AS" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/as.png\" alt=\"American Samoa\" />"}'>
                        American Samoa
                      </option>
                      <option value="AD" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ad.png\" alt=\"Andorra\" />"}'>
                        Andorra
                      </option>
                      <option value="AO" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ao.png\" alt=\"Angola\" />"}'>
                        Angola
                      </option>
                      <option value="AI" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ai.png\" alt=\"Anguilla\" />"}'>
                        Anguilla
                      </option>
                      <option value="AG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ag.png\" alt=\"Antigua and Barbuda\" />"}'>
                        Antigua and Barbuda
                      </option>
                      <option value="AR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ar.png\" alt=\"Argentina\" />"}'>
                        Argentina
                      </option>
                      <option value="AM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/am.png\" alt=\"Armenia\" />"}'>
                        Armenia
                      </option>
                      <option value="AW" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/aw.png\" alt=\"Aruba\" />"}'>
                        Aruba
                      </option>
                      <option value="AU" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/au.png\" alt=\"Australia\" />"}'>
                        Australia
                      </option>
                      <option value="AT" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/at.png\" alt=\"Austria\" />"}'>
                        Austria
                      </option>
                      <option value="AZ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/az.png\" alt=\"Azerbaijan\" />"}'>
                        Azerbaijan
                      </option>
                      <option value="BS" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bs.png\" alt=\"Bahamas\" />"}'>
                        Bahamas
                      </option>
                      <option value="BH" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bh.png\" alt=\"Bahrain\" />"}'>
                        Bahrain
                      </option>
                      <option value="BD" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bd.png\" alt=\"Bangladesh\" />"}'>
                        Bangladesh
                      </option>
                      <option value="BB" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bb.png\" alt=\"Barbados\" />"}'>
                        Barbados
                      </option>
                      <option value="BY" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/by.png\" alt=\"Belarus\" />"}'>
                        Belarus
                      </option>
                      <option value="BE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/be.png\" alt=\"Belgium\" />"}'>
                        Belgium
                      </option>
                      <option value="BZ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bz.png\" alt=\"Belize\" />"}'>
                        Belize
                      </option>
                      <option value="BJ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bj.png\" alt=\"Benin\" />"}'>
                        Benin
                      </option>
                      <option value="BM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bm.png\" alt=\"Bermuda\" />"}'>
                        Bermuda
                      </option>
                      <option value="BT" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bt.png\" alt=\"Bhutan\" />"}'>
                        Bhutan
                      </option>
                      <option value="BO" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bo.png\" alt=\"Bolivia (Plurinational State of)\" />"}'>
                        Bolivia (Plurinational State of)
                      </option>
                      <option value="BQ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bq.png\" alt=\"Bonaire, Sint Eustatius and Saba\" />"}'>
                        Bonaire, Sint Eustatius and Saba
                      </option>
                      <option value="BA" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ba.png\" alt=\"Bosnia and Herzegovina\" />"}'>
                        Bosnia and Herzegovina
                      </option>
                      <option value="BW" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bw.png\" alt=\"Botswana\" />"}'>
                        Botswana
                      </option>
                      <option value="BR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/br.png\" alt=\"Brazil\" />"}'>
                        Brazil
                      </option>
                      <option value="IO" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/io.png\" alt=\"British Indian Ocean Territory\" />"}'>
                        British Indian Ocean Territory
                      </option>
                      <option value="BN" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bn.png\" alt=\"Brunei Darussalam\" />"}'>
                        Brunei Darussalam
                      </option>
                      <option value="BG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bg.png\" alt=\"Bulgaria\" />"}'>
                        Bulgaria
                      </option>
                      <option value="BF" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bf.png\" alt=\"Burkina Faso\" />"}'>
                        Burkina Faso
                      </option>
                      <option value="BI" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bi.png\" alt=\"Burundi\" />"}'>
                        Burundi
                      </option>
                      <option value="CV" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cv.png\" alt=\"Cabo Verde\" />"}'>
                        Cabo Verde
                      </option>
                      <option value="KH" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/kh.png\" alt=\"Cambodia\" />"}'>
                        Cambodia
                      </option>
                      <option value="CM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cm.png\" alt=\"Cameroon\" />"}'>
                        Cameroon
                      </option>
                      <option value="CA" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ca.png\" alt=\"Canada\" />"}'>
                        Canada
                      </option>
                      <option value="KY" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ky.png\" alt=\"Cayman Islands\" />"}'>
                        Cayman Islands
                      </option>
                      <option value="CF" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cf.png\" alt=\"Central African Republic\" />"}'>
                        Central African Republic
                      </option>
                      <option value="TD" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/td.png\" alt=\"Chad\" />"}'>
                        Chad
                      </option>
                      <option value="CL" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cl.png\" alt=\"Chile\" />"}'>
                        Chile
                      </option>
                      <option value="CN" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cn.png\" alt=\"China\" />"}'>
                        China
                      </option>
                      <option value="CX" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cx.png\" alt=\"Christmas Island\" />"}'>
                        Christmas Island
                      </option>
                      <option value="CC" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cc.png\" alt=\"Cocos (Keeling) Islands\" />"}'>
                        Cocos (Keeling) Islands
                      </option>
                      <option value="CO" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/co.png\" alt=\"Colombia\" />"}'>
                        Colombia
                      </option>
                      <option value="KM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/km.png\" alt=\"Comoros\" />"}'>
                        Comoros
                      </option>
                      <option value="CK" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ck.png\" alt=\"Cook Islands\" />"}'>
                        Cook Islands
                      </option>
                      <option value="CR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cr.png\" alt=\"Costa Rica\" />"}'>
                        Costa Rica
                      </option>
                      <option value="HR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/hr.png\" alt=\"Croatia\" />"}'>
                        Croatia
                      </option>
                      <option value="CU" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cu.png\" alt=\"Cuba\" />"}'>
                        Cuba
                      </option>
                      <option value="CW" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cw.png\" alt=\"Curaçao\" />"}'>
                        Curaçao
                      </option>
                      <option value="CY" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cy.png\" alt=\"Cyprus\" />"}'>
                        Cyprus
                      </option>
                      <option value="CZ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cz.png\" alt=\"Czech Republic\" />"}'>
                        Czech Republic
                      </option>
                      <option value="CI" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ci.png\" alt=Côte dIvoire\" />"}'>
                        Côte dIvoire
                      </option>
                      <option value="CD" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cd.png\" alt=\"Democratic Republic of the Congo\" />"}'>
                        Democratic Republic of the Congo
                      </option>
                      <option value="DK" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/dk.png\" alt=\"Denmark\" />"}'>
                        Denmark
                      </option>
                      <option value="DJ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/dj.png\" alt=\"Djibouti\" />"}'>
                        Djibouti
                      </option>
                      <option value="DM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/dm.png\" alt=\"Dominica\" />"}'>
                        Dominica
                      </option>
                      <option value="DO" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/do.png\" alt=\"Dominican Republic\" />"}'>
                        Dominican Republic
                      </option>
                      <option value="EC" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ec.png\" alt=\"Ecuador\" />"}'>
                        Ecuador
                      </option>
                      <option value="EG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/eg.png\" alt=\"Egypt\" />"}'>
                        Egypt
                      </option>
                      <option value="SV" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sv.png\" alt=\"El Salvador\" />"}'>
                        El Salvador
                      </option>
                      <option value="GB-ENG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gb.png\" alt=\"England\" />"}'>
                        England
                      </option>
                      <option value="GQ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gq.png\" alt=\"Equatorial Guinea\" />"}'>
                        Equatorial Guinea
                      </option>
                      <option value="ER" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/er.png\" alt=\"Eritrea\" />"}'>
                        Eritrea
                      </option>
                      <option value="EE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ee.png\" alt=\"Estonia\" />"}'>
                        Estonia
                      </option>
                      <option value="ET" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/et.png\" alt=\"Ethiopia\" />"}'>
                        Ethiopia
                      </option>
                      <option value="FK" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/fk.png\" alt=\"Falkland Islands\" />"}'>
                        Falkland Islands
                      </option>
                      <option value="FO" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/fo.png\" alt=\"Faroe Islands\" />"}'>
                        Faroe Islands
                      </option>
                      <option value="FM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/fm.png\" alt=\"Federated States of Micronesia\" />"}'>
                        Federated States of Micronesia
                      </option>
                      <option value="FJ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/fj.png\" alt=\"Fiji\" />"}'>
                        Fiji
                      </option>
                      <option value="FI" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/fi.png\" alt=\"Finland\" />"}'>
                        Finland
                      </option>
                      <option value="FR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/fr.png\" alt=\"France\" />"}'>
                        France
                      </option>
                      <option value="GF" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gf.png\" alt=\"French Guiana\" />"}'>
                        French Guiana
                      </option>
                      <option value="PF" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/pf.png\" alt=\"French Polynesia\" />"}'>
                        French Polynesia
                      </option>
                      <option value="TF" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/tf.png\" alt=\"French Southern Territories\" />"}'>
                        French Southern Territories
                      </option>
                      <option value="GA" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ga.png\" alt=\"Gabon\" />"}'>
                        Gabon
                      </option>
                      <option value="GM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gm.png\" alt=\"Gambia\" />"}'>
                        Gambia
                      </option>
                      <option value="GE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ge.png\" alt=\"Georgia\" />"}'>
                        Georgia
                      </option>
                      <option value="DE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/de.png\" alt=\"Germany\" />"}'>
                        Germany
                      </option>
                      <option value="GH" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gh.png\" alt=\"Ghana\" />"}'>
                        Ghana
                      </option>
                      <option value="GI" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gi.png\" alt=\"Gibraltar\" />"}'>
                        Gibraltar
                      </option>
                      <option value="GR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gr.png\" alt=\"Greece\" />"}'>
                        Greece
                      </option>
                      <option value="GL" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gl.png\" alt=\"Greenland\" />"}'>
                        Greenland
                      </option>
                      <option value="GD" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gd.png\" alt=\"Grenada\" />"}'>
                        Grenada
                      </option>
                      <option value="GP" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gp.png\" alt=\"Guadeloupe\" />"}'>
                        Guadeloupe
                      </option>
                      <option value="GU" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gu.png\" alt=\"Guam\" />"}'>
                        Guam
                      </option>
                      <option value="GT" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gt.png\" alt=\"Guatemala\" />"}'>
                        Guatemala
                      </option>
                      <option value="GG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gg.png\" alt=\"Guernsey\" />"}'>
                        Guernsey
                      </option>
                      <option value="GN" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gn.png\" alt=\"Guinea\" />"}'>
                        Guinea
                      </option>
                      <option value="GW" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gw.png\" alt=\"Guinea-Bissau\" />"}'>
                        Guinea-Bissau
                      </option>
                      <option value="GY" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gy.png\" alt=\"Guyana\" />"}'>
                        Guyana
                      </option>
                      <option value="HT" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ht.png\" alt=\"Haiti\" />"}'>
                        Haiti
                      </option>
                      <option value="VA" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/va.png\" alt=\"Holy See\" />"}'>
                        Holy See
                      </option>
                      <option value="HN" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/hn.png\" alt=\"Honduras\" />"}'>
                        Honduras
                      </option>
                      <option value="HK" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/hk.png\" alt=\"Hong Kong\" />"}'>
                        Hong Kong
                      </option>
                      <option value="HU" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/hu.png\" alt=\"Hungary\" />"}'>
                        Hungary
                      </option>
                      <option value="IS" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/is.png\" alt=\"Iceland\" />"}'>
                        Iceland
                      </option>
                      <option value="IN" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/in.png\" alt=\"India\" />"}'>
                        India
                      </option>
                      <option value="ID" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/id.png\" alt=\"Indonesia\" />"}'>
                        Indonesia
                      </option>
                      <option value="IR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ir.png\" alt=\"Iran (Islamic Republic of)\" />"}'>
                        Iran (Islamic Republic of)
                      </option>
                      <option value="IQ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/iq.png\" alt=\"Iraq\" />"}'>
                        Iraq
                      </option>
                      <option value="IE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ie.png\" alt=\"Ireland\" />"}'>
                        Ireland
                      </option>
                      <option value="IM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/im.png\" alt=\"Isle of Man\" />"}'>
                        Isle of Man
                      </option>
                      <option value="IL" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/il.png\" alt=\"Israel\" />"}'>
                        Israel
                      </option>
                      <option value="IT" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/it.png\" alt=\"Italy\" />"}'>
                        Italy
                      </option>
                      <option value="JM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/jm.png\" alt=\"Jamaica\" />"}'>
                        Jamaica
                      </option>
                      <option value="JP" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/jp.png\" alt=\"Japan\" />"}'>
                        Japan
                      </option>
                      <option value="JE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/je.png\" alt=\"Jersey\" />"}'>
                        Jersey
                      </option>
                      <option value="JO" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/jo.png\" alt=\"Jordan\" />"}'>
                        Jordan
                      </option>
                      <option value="KZ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/kz.png\" alt=\"Kazakhstan\" />"}'>
                        Kazakhstan
                      </option>
                      <option value="KE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ke.png\" alt=\"Kenya\" />"}'>
                        Kenya
                      </option>
                      <option value="KI" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ki.png\" alt=\"Kiribati\" />"}'>
                        Kiribati
                      </option>
                      <option value="KW" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/kw.png\" alt=\"Kuwait\" />"}'>
                        Kuwait
                      </option>
                      <option value="KG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/kg.png\" alt=\"Kyrgyzstan\" />"}'>
                        Kyrgyzstan
                      </option>
                      <option value="LA" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/la.png\" alt=\"Laos\" />"}'>
                        Laos
                      </option>
                      <option value="LV" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/lv.png\" alt=\"Latvia\" />"}'>
                        Latvia
                      </option>
                      <option value="LB" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/lb.png\" alt=\"Lebanon\" />"}'>
                        Lebanon
                      </option>
                      <option value="LS" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ls.png\" alt=\"Lesotho\" />"}'>
                        Lesotho
                      </option>
                      <option value="LR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/lr.png\" alt=\"Liberia\" />"}'>
                        Liberia
                      </option>
                      <option value="LY" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ly.png\" alt=\"Libya\" />"}'>
                        Libya
                      </option>
                      <option value="LI" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/li.png\" alt=\"Liechtenstein\" />"}'>
                        Liechtenstein
                      </option>
                      <option value="LT" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/lt.png\" alt=\"Lithuania\" />"}'>
                        Lithuania
                      </option>
                      <option value="LU" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/lu.png\" alt=\"Luxembourg\" />"}'>
                        Luxembourg
                      </option>
                      <option value="MO" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mo.png\" alt=\"Macau\" />"}'>
                        Macau
                      </option>
                      <option value="MG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mg.png\" alt=\"Madagascar\" />"}'>
                        Madagascar
                      </option>
                      <option value="MW" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mw.png\" alt=\"Malawi\" />"}'>
                        Malawi
                      </option>
                      <option value="MY" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/my.png\" alt=\"Malaysia\" />"}'>
                        Malaysia
                      </option>
                      <option value="MV" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mv.png\" alt=\"Maldives\" />"}'>
                        Maldives
                      </option>
                      <option value="ML" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ml.png\" alt=\"Mali\" />"}'>
                        Mali
                      </option>
                      <option value="MT" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mt.png\" alt=\"Malta\" />"}'>
                        Malta
                      </option>
                      <option value="MH" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mh.png\" alt=\"Marshall Islands\" />"}'>
                        Marshall Islands
                      </option>
                      <option value="MQ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mq.png\" alt=\"Martinique\" />"}'>
                        Martinique
                      </option>
                      <option value="MR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mr.png\" alt=\"Mauritania\" />"}'>
                        Mauritania
                      </option>
                      <option value="MU" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mu.png\" alt=\"Mauritius\" />"}'>
                        Mauritius
                      </option>
                      <option value="YT" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/yt.png\" alt=\"Mayotte\" />"}'>
                        Mayotte
                      </option>
                      <option value="MX" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mx.png\" alt=\"Mexico\" />"}'>
                        Mexico
                      </option>
                      <option value="MD" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/md.png\" alt=\"Moldova\" />"}'>
                        Moldova
                      </option>
                      <option value="MC" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mc.png\" alt=\"Monaco\" />"}'>
                        Monaco
                      </option>
                      <option value="MN" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mn.png\" alt=\"Mongolia\" />"}'>
                        Mongolia
                      </option>
                      <option value="ME" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/me.png\" alt=\"Montenegro\" />"}'>
                        Montenegro
                      </option>
                      <option value="MS" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ms.png\" alt=\"Montserrat\" />"}'>
                        Montserrat
                      </option>
                      <option value="MA" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ma.png\" alt=\"Morocco\" />"}'>
                        Morocco
                      </option>
                      <option value="MZ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mz.png\" alt=\"Mozambique\" />"}'>
                        Mozambique
                      </option>
                      <option value="MM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mm.png\" alt=\"Myanmar\" />"}'>
                        Myanmar
                      </option>
                      <option value="NA" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/na.png\" alt=\"Namibia\" />"}'>
                        Namibia
                      </option>
                      <option value="NR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/nr.png\" alt=\"Nauru\" />"}'>
                        Nauru
                      </option>
                      <option value="NP" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/np.png\" alt=\"Nepal\" />"}'>
                        Nepal
                      </option>
                      <option value="NL" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/nl.png\" alt=\"Netherlands\" />"}'>
                        Netherlands
                      </option>
                      <option value="NC" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/nc.png\" alt=\"New Caledonia\" />"}'>
                        New Caledonia
                      </option>
                      <option value="NZ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/nz.png\" alt=\"New Zealand\" />"}'>
                        New Zealand
                      </option>
                      <option value="NI" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ni.png\" alt=\"Nicaragua\" />"}'>
                        Nicaragua
                      </option>
                      <option value="NE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ne.png\" alt=\"Niger\" />"}'>
                        Niger
                      </option>
                      <option value="NG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ng.png\" alt=\"Nigeria\" />"}'>
                        Nigeria
                      </option>
                      <option value="NU" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/nu.png\" alt=\"Niue\" />"}'>
                        Niue
                      </option>
                      <option value="NF" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/nf.png\" alt=\"Norfolk Island\" />"}'>
                        Norfolk Island
                      </option>
                      <option value="KP" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/kp.png\" alt=\"North Korea\" />"}'>
                        North Korea
                      </option>
                      <option value="MK" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mk.png\" alt=\"North Macedonia\" />"}'>
                        North Macedonia
                      </option>
                      <option value="GB-NIR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gb.png\" alt=\"Northern Ireland\" />"}'>
                        Northern Ireland
                      </option>
                      <option value="MP" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mp.png\" alt=\"Northern Mariana Islands\" />"}'>
                        Northern Mariana Islands
                      </option>
                      <option value="NO" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/no.png\" alt=\"Norway\" />"}'>
                        Norway
                      </option>
                      <option value="OM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/om.png\" alt=\"Oman\" />"}'>
                        Oman
                      </option>
                      <option value="PK" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/pk.png\" alt=\"Pakistan\" />"}'>
                        Pakistan
                      </option>
                      <option value="PW" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/pw.png\" alt=\"Palau\" />"}'>
                        Palau
                      </option>
                      <option value="PA" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/pa.png\" alt=\"Panama\" />"}'>
                        Panama
                      </option>
                      <option value="PG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/pg.png\" alt=\"Papua New Guinea\" />"}'>
                        Papua New Guinea
                      </option>
                      <option value="PY" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/py.png\" alt=\"Paraguay\" />"}'>
                        Paraguay
                      </option>
                      <option value="PE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/pe.png\" alt=\"Peru\" />"}'>
                        Peru
                      </option>
                      <option value="PH" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ph.png\" alt=\"Philippines\" />"}'>
                        Philippines
                      </option>
                      <option value="PN" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/pn.png\" alt=\"Pitcairn\" />"}'>
                        Pitcairn
                      </option>
                      <option value="PL" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/pl.png\" alt=\"Poland\" />"}'>
                        Poland
                      </option>
                      <option value="PT" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/pt.png\" alt=\"Portugal\" />"}'>
                        Portugal
                      </option>
                      <option value="PR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/pr.png\" alt=\"Puerto Rico\" />"}'>
                        Puerto Rico
                      </option>
                      <option value="QA" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/qa.png\" alt=\"Qatar\" />"}'>
                        Qatar
                      </option>
                      <option value="CG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/cg.png\" alt=\"Republic of the Congo\" />"}'>
                        Republic of the Congo
                      </option>
                      <option value="RO" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ro.png\" alt=\"Romania\" />"}'>
                        Romania
                      </option>
                      <option value="RU" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ru.png\" alt=\"Russia\" />"}'>
                        Russia
                      </option>
                      <option value="RW" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/rw.png\" alt=\"Rwanda\" />"}'>
                        Rwanda
                      </option>
                      <option value="RE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/re.png\" alt=\"Réunion\" />"}'>
                        Réunion
                      </option>
                      <option value="BL" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/bl.png\" alt=\"Saint Barthélemy\" />"}'>
                        Saint Barthélemy
                      </option>
                      <option value="SH" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sh.png\" alt=\"Saint Helena, Ascension and Tristan da Cunha\" />"}'>
                        Saint Helena, Ascension and Tristan da Cunha
                      </option>
                      <option value="KN" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/kn.png\" alt=\"Saint Kitts and Nevis\" />"}'>
                        Saint Kitts and Nevis
                      </option>
                      <option value="LC" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/lc.png\" alt=\"Saint Lucia\" />"}'>
                        Saint Lucia
                      </option>
                      <option value="MF" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/mf.png\" alt=\"Saint Martin\" />"}'>
                        Saint Martin
                      </option>
                      <option value="PM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/pm.png\" alt=\"Saint Pierre and Miquelon\" />"}'>
                        Saint Pierre and Miquelon
                      </option>
                      <option value="VC" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/vc.png\" alt=\"Saint Vincent and the Grenadines\" />"}'>
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="WS" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ws.png\" alt=\"Samoa\" />"}'>
                        Samoa
                      </option>
                      <option value="SM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sm.png\" alt=\"San Marino\" />"}'>
                        San Marino
                      </option>
                      <option value="ST" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/st.png\" alt=\"Sao Tome and Principe\" />"}'>
                        Sao Tome and Principe
                      </option>
                      <option value="SA" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sa.png\" alt=\"Saudi Arabia\" />"}'>
                        Saudi Arabia
                      </option>
                      <option value="GB-SCT" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gb.png\" alt=\"Scotland\" />"}'>
                        Scotland
                      </option>
                      <option value="SN" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sn.png\" alt=\"Senegal\" />"}'>
                        Senegal
                      </option>
                      <option value="RS" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/rs.png\" alt=\"Serbia\" />"}'>
                        Serbia
                      </option>
                      <option value="SC" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sc.png\" alt=\"Seychelles\" />"}'>
                        Seychelles
                      </option>
                      <option value="SL" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sl.png\" alt=\"Sierra Leone\" />"}'>
                        Sierra Leone
                      </option>
                      <option value="SG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sg.png\" alt=\"Singapore\" />"}'>
                        Singapore
                      </option>
                      <option value="SX" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sx.png\" alt=\"Sint Maarten\" />"}'>
                        Sint Maarten
                      </option>
                      <option value="SK" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sk.png\" alt=\"Slovakia\" />"}'>
                        Slovakia
                      </option>
                      <option value="SI" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/si.png\" alt=\"Slovenia\" />"}'>
                        Slovenia
                      </option>
                      <option value="SB" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sb.png\" alt=\"Solomon Islands\" />"}'>
                        Solomon Islands
                      </option>
                      <option value="SO" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/so.png\" alt=\"Somalia\" />"}'>
                        Somalia
                      </option>
                      <option value="ZA" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/za.png\" alt=\"South Africa\" />"}'>
                        South Africa
                      </option>
                      <option value="GS" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gs.png\" alt=\"South Georgia and the South Sandwich Islands\" />"}'>
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="KR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/kr.png\" alt=\"South Korea\" />"}'>
                        South Korea
                      </option>
                      <option value="SS" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ss.png\" alt=\"South Sudan\" />"}'>
                        South Sudan
                      </option>
                      <option value="ES" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/es.png\" alt=\"Spain\" />"}'>
                        Spain
                      </option>
                      <option value="LK" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/lk.png\" alt=\"Sri Lanka\" />"}'>
                        Sri Lanka
                      </option>
                      <option value="PS" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ps.png\" alt=\"State of Palestine\" />"}'>
                        State of Palestine
                      </option>
                      <option value="SD" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sd.png\" alt=\"Sudan\" />"}'>
                        Sudan
                      </option>
                      <option value="SR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sr.png\" alt=\"Suriname\" />"}'>
                        Suriname
                      </option>
                      <option value="SJ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sj.png\" alt=\"Svalbard and Jan Mayen\" />"}'>
                        Svalbard and Jan Mayen
                      </option>
                      <option value="SZ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sz.png\" alt=\"Swaziland\" />"}'>
                        Swaziland
                      </option>
                      <option value="SE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/se.png\" alt=\"Sweden\" />"}'>
                        Sweden
                      </option>
                      <option value="CH" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ch.png\" alt=\"Switzerland\" />"}'>
                        Switzerland
                      </option>
                      <option value="SY" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/sy.png\" alt=\"Syrian Arab Republic\" />"}'>
                        Syrian Arab Republic
                      </option>
                      <option value="TW" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/tw.png\" alt=\"Taiwan\" />"}'>
                        Taiwan
                      </option>
                      <option value="TJ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/tj.png\" alt=\"Tajikistan\" />"}'>
                        Tajikistan
                      </option>
                      <option value="TZ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/tz.png\" alt=\"Tanzania\" />"}'>
                        Tanzania
                      </option>
                      <option value="TH" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/th.png\" alt=\"Thailand\" />"}'>
                        Thailand
                      </option>
                      <option value="TL" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/tl.png\" alt=\"Timor-Leste\" />"}'>
                        Timor-Leste
                      </option>
                      <option value="TG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/tg.png\" alt=\"Togo\" />"}'>
                        Togo
                      </option>
                      <option value="TK" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/tk.png\" alt=\"Tokelau\" />"}'>
                        Tokelau
                      </option>
                      <option value="TO" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/to.png\" alt=\"Tonga\" />"}'>
                        Tonga
                      </option>
                      <option value="TT" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/tt.png\" alt=\"Trinidad and Tobago\" />"}'>
                        Trinidad and Tobago
                      </option>
                      <option value="TN" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/tn.png\" alt=\"Tunisia\" />"}'>
                        Tunisia
                      </option>
                      <option value="TR" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/tr.png\" alt=\"Turkey\" />"}'>
                        Turkey
                      </option>
                      <option value="TM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/tm.png\" alt=\"Turkmenistan\" />"}'>
                        Turkmenistan
                      </option>
                      <option value="TC" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/tc.png\" alt=\"Turks and Caicos Islands\" />"}'>
                        Turks and Caicos Islands
                      </option>
                      <option value="TV" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/tv.png\" alt=\"Tuvalu\" />"}'>
                        Tuvalu
                      </option>
                      <option value="UG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ug.png\" alt=\"Uganda\" />"}'>
                        Uganda
                      </option>
                      <option value="UA" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ua.png\" alt=\"Ukraine\" />"}'>
                        Ukraine
                      </option>
                      <option value="AE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ae.png\" alt=\"United Arab Emirates\" />"}'>
                        United Arab Emirates
                      </option>
                      <option value="GB" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gb.png\" alt=\"United Kingdom\" />"}'>
                        United Kingdom
                      </option>
                      <option value="UM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/um.png\" alt=\"United States Minor Outlying Islands\" />"}'>
                        United States Minor Outlying Islands
                      </option>
                      <option selected value="US" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/us.png\" alt=\"United States of America\" />"}'>
                        United States of America
                      </option>
                      <option value="UY" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/uy.png\" alt=\"Uruguay\" />"}'>
                        Uruguay
                      </option>
                      <option value="UZ" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/uz.png\" alt=\"Uzbekistan\" />"}'>
                        Uzbekistan
                      </option>
                      <option value="VU" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/vu.png\" alt=\"Vanuatu\" />"}'>
                        Vanuatu
                      </option>
                      <option value="VE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ve.png\" alt=\"Venezuela (Bolivarian Republic of)\" />"}'>
                        Venezuela (Bolivarian Republic of)
                      </option>
                      <option value="VN" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/vn.png\" alt=\"Vietnam\" />"}'>
                        Vietnam
                      </option>
                      <option value="VG" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/vg.png\" alt=\"Virgin Islands (British)\" />"}'>
                        Virgin Islands (British)
                      </option>
                      <option value="VI" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/vi.png\" alt=\"Virgin Islands (U.S.)\" />"}'>
                        Virgin Islands (U.S.)
                      </option>
                      <option value="GB-WLS" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/gb.png\" alt=\"Wales\" />"}'>
                        Wales
                      </option>
                      <option value="WF" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/wf.png\" alt=\"Wallis and Futuna\" />"}'>
                        Wallis and Futuna
                      </option>
                      <option value="EH" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/eh.png\" alt=\"Western Sahara\" />"}'>
                        Western Sahara
                      </option>
                      <option value="YE" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/ye.png\" alt=\"Yemen\" />"}'>
                        Yemen
                      </option>
                      <option value="ZM" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/zm.png\" alt=\"Zambia\" />"}'>
                        Zambia
                      </option>
                      <option value="ZW" data-hs-select-option='{
                        "icon": "<img className=\"inline-block b9gop rounded-full \" src=\"../../assets/vendor/svg-country-flags/png100px/zw.png\" alt=\"Zimbabwe\" />"}'>
                        Zimbabwe
                      </option>
                    </select>

                    <div className="absolute zoyba ez989 -translate-y-1/2">
                      <svg className="shrink-0 h6zia jy5gh dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m7 15 5 5 5-5" />
                        <path d="m7 9 5-5 5 5" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block wyf4w text-sm sikx1 text-gray-800 dark:text-neutral-200">
                    Currency
                  </label>

                  <div className="relative">
                    <select data-hs-select='{
                        "placeholder": "Select currency",
                        "hasSearch": true,
                        "searchPlaceholder": "Select currency",
                        "searchClasses": "od5va yzhap f2l40 block w-full glhrq border-gray-200 rounded-lg o0e5q m5fuw dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400",
                        "searchWrapperClasses": "bg-white an00p -mx-1 sticky top-0 dark:bg-neutral-900",
                        "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 srbq1 ur1vp flex items-center gap-x-2 m6d8q w-full cursor-pointer bg-white rsdjd border-gray-200 rounded-lg text-start text-sm focus:outline-hidden zx3z8 m5fuw dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:outline-hidden dark:focus:ring-1 dark:focus:ring-neutral-600",
                        
                        "dropdownClasses": "oc2zw w-full rdef8 vyel6 space-y-0.5 z-50 overflow-hidden overflow-y-auto bg-white er6t7 gmg3v xwpzv y0qzi bxgd5 n3xnc dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900",
                        "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 s53ws px-4 w-full text-sm text-gray-800 cursor-pointer d05xb rounded-lg focus:outline-hidden r17tr dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                        "optionTemplate": "<div className=\"flex justify-between items-center w-full \"><span data-title></span><span className=\"hidden hs-selected:block \"><svg className=\"shrink-0 h6zia text-gray-800 dark:text-neutral-200 \" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                        "dropdownScope": "window",
                        "viewport": "#hs-pro-shnlm-body"
                      }' className="hidden">
                      <option value="">Choose</option>
                      <option value="USD" selected>USD</option>
                      <option value="AED">AED</option>
                      <option value="AFN">AFN</option>
                      <option value="ALL">ALL</option>
                      <option value="AMD">AMD</option>
                      <option value="ANG">ANG</option>
                      <option value="AOA">AOA</option>
                      <option value="ARS">ARS</option>
                      <option value="AUD">AUD</option>
                      <option value="AWG">AWG</option>
                      <option value="AZN">AZN</option>
                      <option value="BAM">BAM</option>
                      <option value="BBD">BBD</option>
                      <option value="BDT">BDT</option>
                      <option value="BGN">BGN</option>
                      <option value="BIF">BIF</option>
                      <option value="BMD">BMD</option>
                      <option value="BND">BND</option>
                      <option value="BOB">BOB</option>
                      <option value="BRL">BRL</option>
                      <option value="BSD">BSD</option>
                      <option value="BWP">BWP</option>
                      <option value="BZD">BZD</option>
                      <option value="CAD">CAD</option>
                      <option value="CDF">CDF</option>
                      <option value="CHF">CHF</option>
                      <option value="CLP">CLP</option>
                      <option value="CNY">CNY</option>
                      <option value="COP">COP</option>
                      <option value="CRC">CRC</option>
                      <option value="CVE">CVE</option>
                      <option value="CZK">CZK</option>
                      <option value="DJF">DJF</option>
                      <option value="DKK">DKK</option>
                      <option value="DOP">DOP</option>
                      <option value="DZD">DZD</option>
                      <option value="EGP">EGP</option>
                      <option value="ETB">ETB</option>
                      <option value="EUR">EUR</option>
                      <option value="FJD">FJD</option>
                      <option value="FKP">FKP</option>
                      <option value="GBP">GBP</option>
                      <option value="GEL">GEL</option>
                      <option value="GIP">GIP</option>
                      <option value="GMD">GMD</option>
                      <option value="GNF">GNF</option>
                      <option value="GTQ">GTQ</option>
                      <option value="GYD">GYD</option>
                      <option value="HKD">HKD</option>
                      <option value="HNL">HNL</option>
                      <option value="HRK">HRK</option>
                      <option value="HTG">HTG</option>
                      <option value="HUF">HUF</option>
                      <option value="IDR">IDR</option>
                      <option value="ILS">ILS</option>
                      <option value="INR">INR</option>
                      <option value="ISK">ISK</option>
                      <option value="JMD">JMD</option>
                      <option value="JPY">JPY</option>
                      <option value="KES">KES</option>
                      <option value="KGS">KGS</option>
                      <option value="KHR">KHR</option>
                      <option value="KMF">KMF</option>
                      <option value="KRW">KRW</option>
                      <option value="KYD">KYD</option>
                      <option value="KZT">KZT</option>
                      <option value="LAK">LAK</option>
                      <option value="LBP">LBP</option>
                      <option value="LKR">LKR</option>
                      <option value="LRD">LRD</option>
                      <option value="LSL">LSL</option>
                      <option value="MAD">MAD</option>
                      <option value="MDL">MDL</option>
                      <option value="MGA">MGA</option>
                      <option value="MKD">MKD</option>
                      <option value="MMK">MMK</option>
                      <option value="MNT">MNT</option>
                      <option value="MOP">MOP</option>
                      <option value="MRO">MRO</option>
                      <option value="MUR">MUR</option>
                      <option value="MVR">MVR</option>
                      <option value="MWK">MWK</option>
                      <option value="MXN">MXN</option>
                      <option value="MYR">MYR</option>
                      <option value="MZN">MZN</option>
                      <option value="NAD">NAD</option>
                      <option value="NGN">NGN</option>
                      <option value="NIO">NIO</option>
                      <option value="NOK">NOK</option>
                      <option value="NPR">NPR</option>
                      <option value="NZD">NZD</option>
                      <option value="PAB">PAB</option>
                      <option value="PEN">PEN</option>
                      <option value="PGK">PGK</option>
                      <option value="PHP">PHP</option>
                      <option value="PKR">PKR</option>
                      <option value="PLN">PLN</option>
                      <option value="PYG">PYG</option>
                      <option value="QAR">QAR</option>
                      <option value="RON">RON</option>
                      <option value="RSD">RSD</option>
                      <option value="RUB">RUB</option>
                      <option value="RWF">RWF</option>
                      <option value="SAR">SAR</option>
                      <option value="SBD">SBD</option>
                      <option value="SCR">SCR</option>
                      <option value="SEK">SEK</option>
                      <option value="SGD">SGD</option>
                      <option value="SHP">SHP</option>
                      <option value="SLL">SLL</option>
                      <option value="SOS">SOS</option>
                      <option value="SRD">SRD</option>
                      <option value="STD">STD</option>
                      <option value="SZL">SZL</option>
                      <option value="THB">THB</option>
                      <option value="TJS">TJS</option>
                      <option value="TOP">TOP</option>
                      <option value="TRY">TRY</option>
                      <option value="TTD">TTD</option>
                      <option value="TWD">TWD</option>
                      <option value="TZS">TZS</option>
                      <option value="UAH">UAH</option>
                      <option value="UGX">UGX</option>
                      <option value="UYU">UYU</option>
                      <option value="UZS">UZS</option>
                      <option value="VND">VND</option>
                      <option value="VUV">VUV</option>
                      <option value="WST">WST</option>
                      <option value="XAF">XAF</option>
                      <option value="XCD">XCD</option>
                      <option value="XOF">XOF</option>
                      <option value="XPF">XPF</option>
                      <option value="YER">YER</option>
                      <option value="ZAR">ZAR</option>
                      <option value="ZMW">ZMW</option>
                    </select>

                    <div className="absolute zoyba ez989 -translate-y-1/2">
                      <svg className="shrink-0 h6zia jy5gh dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m7 15 5 5 5-5" />
                        <path d="m7 9 5-5 5 5" />
                      </svg>
                    </div>
                  </div>
                </div>

                <p className="z4zqw jy5gh dark:text-neutral-500">
                  By continuing, you accept the <a className="jy5gh underline underline-offset-4 l5oyh mg8vb focus:outline-hidden pwmu5 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Terms and Conditions</a> of your chosen country or region.
                </p>
              </div>
            </div>

            <div className="jq72l kmove ljvct tylsg flex flex-col o4ndh">
              <button type="button" className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm sikx1 rounded-lg rsdjd azddh lgr79 kew0r gocsw disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden yveoa" data-hs-overlay="#hs-pro-shnrsm">
                Accept
              </button>

              <div className="dtief">
                <button type="button" className="py-3 px-4 w-full inline-flex justify-center items-center b1nd2 text-sm sikx1 rounded-lg rsdjd border-gray-200 bg-white text-gray-800 hj07t nzmya disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden d16zw dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-300" data-hs-overlay="#hs-pro-shnrsm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hs-pro-shwrm" className="hs-overlay hidden w-full h-full fixed top-0 left-0 oc2zw overflow-x-hidden overflow-y-auto [--close-when-click-inside:true] gxxgf" role="dialog" tabindex="-1" aria-labelledby="hs-pro-shwrm-label">
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 l6g2h opacity-0 ccbyv transition-all duration-300 ease-in-out exojt sm:w-full xzljp sm:mx-auto h-[calc(100%-56px)] min-h-[calc(100%-56px)] flex items-center">
          <div className="w-full a0p67 relative overflow-hidden flex flex-col bg-white er6t7 pointer-events-auto gmg3v dark:bg-neutral-800">
            <div className="py-4 px-6 wq9mm flex justify-between items-center border-bottom-2 border-gray-200 dark:border-neutral-700">
              <h3 id="hs-pro-shwrm-label" className="sikx1 text-gray-800 dark:text-neutral-200">
                Send feedback
              </h3>
              <button type="button" className="yl1cu shrink-0 flex justify-center items-center gap-x-2 rounded-full rsdjd azddh f4yn1 text-gray-800 cq7a3 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden f6db7 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-pro-shwrm">
                <span className="et50x">Close</span>
                <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto xwpzv y0qzi bxgd5 n3xnc dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="jq72l sa2ld ljvct kfgj5 space-y-6">
                <div>
                  <label className="block wyf4w text-sm sikx1 text-gray-800 dark:text-neutral-200">
                    What would you like to tell us about?
                  </label>

                  <div className="ylm8n zez8u g27d7">
                    <label htmlFor="hs-pro-shwrvtgri1" className="an00p mf4b9 xs2f2 flex flex-col justify-center items-center suhn5 dtief bg-white text-gray-800 rsdjd border-gray-200 gzyzm kuxro fao71 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:has-checked:border-indigo-500 dark:has-checked:ring-indigo-500">
                      <input type="radio" id="hs-pro-shwrvtgri1" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shwrvtgri" />
                      <svg className="shrink-0 qqwrg mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="M6 8h.01" />
                        <path d="M10 8h.01" />
                        <path d="M14 8h.01" />
                      </svg><span className="block ja90s">Preline Website</span>
                    </label>

                    <label htmlFor="hs-pro-shwrvtgri2" className="an00p mf4b9 xs2f2 flex flex-col justify-center items-center suhn5 dtief bg-white text-gray-800 rsdjd border-gray-200 gzyzm kuxro fao71 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:has-checked:border-indigo-500 dark:has-checked:ring-indigo-500">
                      <input type="radio" id="hs-pro-shwrvtgri2" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shwrvtgri" />
                      <svg className="shrink-0 qqwrg mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                        <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                      </svg><span className="block ja90s">Customer Service</span>
                    </label>

                    <label htmlFor="hs-pro-shwrvtgri3" className="an00p mf4b9 xs2f2 flex flex-col justify-center items-center suhn5 dtief bg-white text-gray-800 rsdjd border-gray-200 gzyzm kuxro fao71 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:has-checked:border-indigo-500 dark:has-checked:ring-indigo-500">
                      <input type="radio" id="hs-pro-shwrvtgri3" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shwrvtgri" />
                      <svg className="shrink-0 qqwrg mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
                        <circle cx="12" cy="8" r="2" />
                        <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
                      </svg><span className="block ja90s">Our Store</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block wyf4w text-sm sikx1 text-gray-800 dark:text-neutral-200">
                    How easy was it to accomplish that goal?
                  </label>

                  <div className="ylm8n yjjd2 v1hon cfdb8">
                    <label htmlFor="hs-pro-shwrvtgre1" className="an00p mf4b9 xs2f2 flex flex-col justify-center items-center suhn5 dtief bg-white text-gray-800 rsdjd border-gray-200 gzyzm kuxro fao71 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:has-checked:border-indigo-500 dark:has-checked:ring-indigo-500">
                      <input type="radio" id="hs-pro-shwrvtgre1" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shwrvtgre" />
                      <span className="block rwumq text-xl">😠</span>Awful
                    </label>

                    <label htmlFor="hs-pro-shwrvtgre2" className="an00p mf4b9 xs2f2 flex flex-col justify-center items-center suhn5 dtief bg-white text-gray-800 rsdjd border-gray-200 gzyzm kuxro fao71 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:has-checked:border-indigo-500 dark:has-checked:ring-indigo-500">
                      <input type="radio" id="hs-pro-shwrvtgre2" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shwrvtgre" />
                      <span className="block rwumq text-xl">🙁</span>Bad
                    </label>

                    <label htmlFor="hs-pro-shwrvtgre3" className="an00p mf4b9 xs2f2 flex flex-col justify-center items-center suhn5 dtief bg-white text-gray-800 rsdjd border-gray-200 gzyzm kuxro fao71 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:has-checked:border-indigo-500 dark:has-checked:ring-indigo-500">
                      <input type="radio" id="hs-pro-shwrvtgre3" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shwrvtgre" />
                      <span className="block rwumq text-xl">🙂</span>Okay
                    </label>

                    <label htmlFor="hs-pro-shwrvtgre4" className="an00p mf4b9 xs2f2 flex flex-col justify-center items-center suhn5 dtief bg-white text-gray-800 rsdjd border-gray-200 gzyzm kuxro fao71 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:has-checked:border-indigo-500 dark:has-checked:ring-indigo-500">
                      <input type="radio" id="hs-pro-shwrvtgre4" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shwrvtgre" />
                      <span className="block rwumq text-xl">😃</span>Good
                    </label>

                    <label htmlFor="hs-pro-shwrvtgre5" className="an00p mf4b9 xs2f2 flex flex-col justify-center items-center suhn5 dtief bg-white text-gray-800 rsdjd border-gray-200 gzyzm kuxro fao71 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:has-checked:border-indigo-500 dark:has-checked:ring-indigo-500">
                      <input type="radio" id="hs-pro-shwrvtgre5" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shwrvtgre" />
                      <span className="block rwumq text-xl">😍</span>Great
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block wyf4w text-sm sikx1 text-gray-800 dark:text-neutral-200">
                    How was your experience?
                  </label>

                  <div className="flex flex-row-reverse justify-end items-center gap-x-0.5">
                    <input id="hs-pro-shfdr-1" type="radio" className="peer -ms-7 qqwrg w4poy gylz8 lg492 cursor-pointer u6vve checked:bg-none jvdhx yvj92 axcnw" name="hs-pro-shfdr" value="1" />
                    <label htmlFor="hs-pro-shfdr-1" className="peer-checked:text-indigo-600 peer-hover:text-indigo-600 nkl2o gxxgf dark:peer-checked:text-indigo-400 dark:peer-hover:text-indigo-400 dark:text-neutral-600">
                      <svg className="shrink-0 qqwrg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </label>
                    <input id="hs-pro-shfdr-2" type="radio" className="peer -ms-7 qqwrg w4poy gylz8 lg492 cursor-pointer u6vve checked:bg-none jvdhx yvj92 axcnw" name="hs-pro-shfdr" value="2" />
                    <label htmlFor="hs-pro-shfdr-2" className="peer-checked:text-indigo-600 peer-hover:text-indigo-600 nkl2o gxxgf dark:peer-checked:text-indigo-400 dark:peer-hover:text-indigo-400 dark:text-neutral-600">
                      <svg className="shrink-0 qqwrg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </label>
                    <input id="hs-pro-shfdr-3" type="radio" className="peer -ms-7 qqwrg w4poy gylz8 lg492 cursor-pointer u6vve checked:bg-none jvdhx yvj92 axcnw" name="hs-pro-shfdr" value="3" />
                    <label htmlFor="hs-pro-shfdr-3" className="peer-checked:text-indigo-600 peer-hover:text-indigo-600 nkl2o gxxgf dark:peer-checked:text-indigo-400 dark:peer-hover:text-indigo-400 dark:text-neutral-600">
                      <svg className="shrink-0 qqwrg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </label>
                    <input id="hs-pro-shfdr-4" type="radio" className="peer -ms-7 qqwrg w4poy gylz8 lg492 cursor-pointer u6vve checked:bg-none jvdhx yvj92 axcnw" name="hs-pro-shfdr" value="4" />
                    <label htmlFor="hs-pro-shfdr-4" className="peer-checked:text-indigo-600 peer-hover:text-indigo-600 nkl2o gxxgf dark:peer-checked:text-indigo-400 dark:peer-hover:text-indigo-400 dark:text-neutral-600">
                      <svg className="shrink-0 qqwrg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </label>
                    <input id="hs-pro-shfdr-5" type="radio" className="peer -ms-7 qqwrg w4poy gylz8 lg492 cursor-pointer u6vve checked:bg-none jvdhx yvj92 axcnw" name="hs-pro-shfdr" value="5" />
                    <label htmlFor="hs-pro-shfdr-5" className="peer-checked:text-indigo-600 peer-hover:text-indigo-600 nkl2o gxxgf dark:peer-checked:text-indigo-400 dark:peer-hover:text-indigo-400 dark:text-neutral-600">
                      <svg className="shrink-0 qqwrg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block wyf4w text-sm sikx1 text-gray-800 dark:text-neutral-200">
                    What brought you to our site today?
                  </label>

                  <div className="relative">
                    <select data-hs-select='{
                        "placeholder": "Select a reason",
                        "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 srbq1 ur1vp flex gap-x-2 m6d8q w-full cursor-pointer bg-white rsdjd border-gray-200 rounded-lg text-start text-sm focus:outline-hidden zx3z8 m5fuw dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:outline-hidden dark:focus:ring-1 dark:focus:ring-neutral-600",
                        "dropdownClasses": "oc2zw rdef8 vyel6 space-y-0.5 z-50 w-full overflow-hidden overflow-y-auto bg-white er6t7 gmg3v xwpzv y0qzi bxgd5 n3xnc dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900",
                        "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 s53ws px-4 w-full text-sm text-gray-800 cursor-pointer d05xb rounded-lg focus:outline-hidden r17tr dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                        "dropdownScope": "window"
                      }' className="hidden">
                      <option value="">Choose</option>
                      <option>Discover new arrivals</option>
                      <option>Find a specific item</option>
                      <option>Compare products (features, size, price)</option>
                      <option>Check out special offers</option>
                      <option>Plan an in-store visit</option>
                      <option>Reach out for customer support</option>
                      <option>Other reasons</option>
                    </select>

                    <div className="absolute zoyba ez989 -translate-y-1/2">
                      <svg className="shrink-0 h6zia jy5gh dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m7 15 5 5 5-5" />
                        <path d="m7 9 5-5 5 5" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="hs-pro-shfmt" className="block wyf4w text-sm sikx1 text-gray-800 dark:text-neutral-200">
                    Comments
                  </label>

                  <textarea id="hs-pro-shfmt" className="py-3 px-4 block w-full border-gray-200 rounded-lg glhrq bj1nl o0e5q m5fuw disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-600 dark:focus:ring-neutral-600" rows="3"></textarea>
                </div>

                <p className="xs2f2 jy5gh dark:text-neutral-500">
                  While we appreciate your feedback, we're not equipped to handle support requests here. For product or service help, please use our official <a className="sikx1 text-gray-800 l5oyh underline underline-offset-4 iiod0 focus:outline-hidden s6w37 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400" href="../../pro/shop/help.html">contact methods.</a>
                </p>
              </div>
            </div>

            <div className="jq72l ljvct flex flex-col o4ndh">
              <button type="button" className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm sikx1 rounded-lg rsdjd azddh lgr79 kew0r gocsw disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden yveoa" data-hs-overlay="#hs-pro-shwrm">
                Submit feedback
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="hs-pro-shco" className="hs-overlay hs-overlay-open:translate-x-0 hidden dfgf4 fixed top-0 kji94 transition-all duration-300 ease-in-out duration-300 h587a w-full h-full scslr oc2zw flex flex-col bg-white dark:bg-neutral-800" role="dialog" tabindex="-1" aria-labelledby="hs-pro-shco-label">
        <div className="py-3 px-6 flex justify-between items-center border-bottom-2 border-gray-200 dark:border-neutral-700">
          <h3 id="hs-pro-shco-label" className="sikx1 text-gray-800 dark:text-neutral-200">
            Cart (3 items)
          </h3>
          <button type="button" className="od5va jxswk inline-flex justify-center items-center gap-x-1 rounded-full rsdjd border-gray-200 xs2f2 text-gray-800 d05xb focus:outline-hidden r17tr disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:focus:bg-neutral-700" aria-label="Close" data-hs-overlay="#hs-pro-shco">
            <span className="hidden lg:block">Esc</span>
            <span className="block lg:hidden">Close</span>
            <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="h-full overflow-y-auto overflow-hidden xwpzv y0qzi bxgd5 n3xnc dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div className="py-4 px-6 relative overflow-hidden nyvaf u01jo caww7 pv5gf if3u5 dark:from-orange-800 dark:via-purple-800 dark:to-indigo-800" role="alert" tabindex="-1" aria-labelledby="hs-pro-shfshal-label">
            <h4 id="hs-pro-shfshal-label" className="sikx1 text-gray-800 dark:text-neutral-200">
              Free shipping&nbsp;on orders over $50
            </h4>
            <p className="rwavo xs2f2 jy5gh dark:text-white/50">
              <a className="sikx1 xs2f2 text-gray-800 l5oyh underline underline-offset-4 iiod0 focus:outline-hidden s6w37 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400" href="../../pro/shop/login.html">Log In</a> or <a className="sikx1 xs2f2 text-gray-800 l5oyh underline underline-offset-4 iiod0 focus:outline-hidden s6w37 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400" href="../../pro/shop/create-account.html">Register</a>
            </p>
          </div>

          <div className="jq72l space-y-7">
            <div id="hs-pro-shcopci1" className="hs-removing:opacity-0 duration-300 flex p5sau">
              <div className="relative">
                <img className="shrink-0 fl6qw i5kts x1s1r f4yn1 rounded-lg dark:bg-neutral-700" src="https://images.unsplash.com/photo-1699595749116-33a4a869503c?q=80&w=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />

                <div className="absolute top-0 kji94 wzd7f tgq8c wn488">
                  <button type="button" className="yhc35 flex justify-center items-center gap-x-1 rounded-full xs2f2 bg-white rsdjd azddh text-gray-800 mmvvq disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden rr3j6">
                    <svg className="shrink-0 mo9p3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                    <span className="et50x">Add to favorites</span>
                  </button>
                </div>
              </div>

              <div className="grow-1 flex flex-col">
                <h4 className="text-sm text-gray-800 dark:text-neutral-200">
                  Nike Air Force 1
                </h4>

                <ul className="y18m4 space-y-1">
                  <li className="xs2f2 jy5gh dark:text-neutral-500">
                    Color: White
                  </li>
                  <li className="xs2f2 jy5gh dark:text-neutral-500">
                    Size: M
                  </li>
                </ul>

                <p className="y18m4 xs2f2 jy5gh dark:text-neutral-500">
                  <span>Qty:</span>
                  <span>1</span>
                </p>

                <span className="y18m4 text-sm text-gray-800 dark:text-neutral-200">
                  $149
                </span>

                <div className="">
                  <button type="button" className="inline-flex items-center b1nd2 z4zqw text-gray-800 l5oyh underline underline-offset-4 iiod0 focus:outline-hidden s6w37 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400" data-hs-remove-element="#hs-pro-shcopci1">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div id="hs-pro-shcopci2" className="hs-removing:opacity-0 duration-300 flex p5sau">
              <div className="relative">
                <img className="shrink-0 fl6qw i5kts x1s1r f4yn1 rounded-lg dark:bg-neutral-700" src="https://images.unsplash.com/photo-1708443683334-1e41c52f33ac?q=80&w=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />

                <div className="absolute top-0 kji94 wzd7f tgq8c wn488">
                  <button type="button" className="yhc35 flex justify-center items-center gap-x-1 rounded-full xs2f2 bg-white rsdjd azddh text-gray-800 mmvvq disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden rr3j6">
                    <svg className="shrink-0 mo9p3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                    <span className="et50x">Add to favorites</span>
                  </button>
                </div>
              </div>

              <div className="grow-1 flex flex-col">
                <h4 className="text-sm text-gray-800 dark:text-neutral-200">
                  Camo Blend Jacket
                </h4>

                <ul className="y18m4 space-y-1">
                  <li className="xs2f2 jy5gh dark:text-neutral-500">
                    Color: Camo
                  </li>
                  <li className="xs2f2 jy5gh dark:text-neutral-500">
                    Size: M
                  </li>
                </ul>

                <p className="y18m4 xs2f2 jy5gh dark:text-neutral-500">
                  <span>Qty:</span>
                  <span>1</span>
                </p>
                <span className="y18m4">
                  <span className="text-sm jy5gh dark:text-neutral-500">
                    <s>$60</s>
                  </span>
                  <span className="text-sm jmzb2">
                    $40
                  </span>
                </span>

                <div className="">
                  <button type="button" className="inline-flex items-center b1nd2 z4zqw text-gray-800 l5oyh underline underline-offset-4 iiod0 focus:outline-hidden s6w37 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400" data-hs-remove-element="#hs-pro-shcopci2">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div id="hs-pro-shcopci3" className="hs-removing:opacity-0 duration-300 flex p5sau">
              <div className="relative">
                <img className="shrink-0 fl6qw i5kts x1s1r f4yn1 rounded-lg dark:bg-neutral-700" src="https://images.unsplash.com/photo-1603218183500-7e1d62c3c679?q=80&w=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />

                <div className="absolute top-0 kji94 wzd7f tgq8c wn488">
                  <button type="button" className="yhc35 flex justify-center items-center gap-x-1 rounded-full xs2f2 bg-white rsdjd azddh text-gray-800 mmvvq disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden rr3j6">
                    <svg className="shrink-0 mo9p3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                    <span className="et50x">Add to favorites</span>
                  </button>
                </div>
              </div>

              <div className="grow-1 flex flex-col">
                <h4 className="text-sm text-gray-800 dark:text-neutral-200">
                  Mahabis Classic
                </h4>

                <ul className="y18m4 space-y-1">
                  <li className="xs2f2 jy5gh dark:text-neutral-500">
                    Color: White
                  </li>
                  <li className="xs2f2 jy5gh dark:text-neutral-500">
                    Size: M
                  </li>
                </ul>

                <p className="y18m4 xs2f2 jy5gh dark:text-neutral-500">
                  <span>Qty:</span>
                  <span>1</span>
                </p>

                <span className="y18m4 text-sm text-gray-800 dark:text-neutral-200">
                  $40
                </span>

                <div className="">
                  <button type="button" className="inline-flex items-center b1nd2 z4zqw text-gray-800 l5oyh underline underline-offset-4 iiod0 focus:outline-hidden s6w37 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400" data-hs-remove-element="#hs-pro-shcopci3">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 bbn74 px-6 yfv61 border-gray-200 dark:border-neutral-700">
          <div className="rwumq ylm8n dzapa o4ndh">
            <div>
              <p className="font-semibold text-gray-800 dark:text-neutral-200">
                Subtotal
              </p>
            </div>
            <div className="vrmqq">
              <span className="font-semibold text-gray-800 dark:text-neutral-200">$229</span>
            </div>
          </div>

          <p className="n8xpr o4l1x z4zqw jy5gh dark:text-neutral-500">
            Shipping, taxes and discounts are calculated at checkout.
          </p>

          <div className="flex items-center gap-x-2">
            <a className="py-3 px-4 relative w-full inline-flex justify-center items-center b1nd2 text-sm sikx1 rounded-lg rsdjd border-gray-200 bg-white text-gray-800 hj07t nzmya disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden d16zw dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-300" href="../../pro/shop/cart.html">
              View cart (3)
            </a>

            <a className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm sikx1 rounded-lg rsdjd azddh lgr79 kew0r gocsw disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden yveoa" href="../../pro/shop/checkout.html">
              Checkout
            </a>
          </div>
        </div>
      </div>

      <div id="hs-pro-shchpdm" className="hs-overlay hidden w-full h-full fixed top-0 left-0 oc2zw overflow-x-hidden overflow-y-auto [--close-when-click-inside:true] gxxgf" role="dialog" tabindex="-1" aria-labelledby="hs-pro-shchpdm-label">
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 l6g2h opacity-0 ccbyv transition-all duration-300 ease-in-out c22e6 p8stn sm:w-full xzljp sm:mx-auto h-[calc(100%-56px)] min-h-[calc(100%-56px)] flex items-center">
          <div className="relative w-full a0p67 flex flex-col bg-white er6t7 pointer-events-auto gmg3v dark:bg-neutral-800">
            <div className="absolute gvmr9 ez989 wzd7f">
              <button type="button" className="yl1cu shrink-0 flex justify-center items-center gap-x-2 rounded-full rsdjd azddh f4yn1 text-gray-800 cq7a3 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden f6db7 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-pro-shchpdm">
                <span className="et50x">Close</span>
                <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="ylm8n hjdn7 n1jx0">
              <div className="hidden lg:block relative">
                <img className="shrink-0 absolute inset-0 w-full h-full x1s1r i068m zsm8r u7sip ptznm" src="https://images.unsplash.com/photo-1699593022913-7068606059c8?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
              </div>

              <div className="py-4 bbn74 mq9z0">
                <div className="flex flex-col justify-between n60o7 oahst">
                  <div className="px-4 sm:px-6 lg:px-8 flex items-center vyfcq">
                    <div className="lg:hidden shrink-0 s2spy">
                      <img className="shrink-0 w-full h-full x1s1r i068m er6t7" src="https://images.unsplash.com/photo-1699593022913-7068606059c8?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                    </div>
                    <div className="grow-1">
                      <p className="text-sm jy5gh dark:text-neutral-500">
                        Men's shoes
                      </p>
                      <h4 id="hs-pro-shchpdm-label" className="sikx1 tbkeq text-gray-800 dark:text-neutral-200">
                        Nike Alphafly 3 Electric
                      </h4>
                    </div>

                    <div className="vrmqq">
                      <p className="jy5gh text-sm dark:text-neutral-500">
                        <s>$220</s>
                      </p>
                      <p className="sikx1 text-sm jmzb2">
                        $190
                      </p>
                    </div>
                  </div>

                  <div className="gl1ai hp53n px-4 sm:px-6 lg:px-8 space-y-7 p6nx8 tz0gw overflow-y-auto xwpzv y0qzi bxgd5 n3xnc dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    <div>
                      <h5 className="wyf4w sikx1 text-sm text-gray-800 dark:text-neutral-200">
                        Colors
                      </h5>

                      <div className="flex flex-wrap ekrv9">
                        <label htmlFor="hs-pro-shprmich1" className="yl1cu r6u7e rounded-full flex flex-col justify-center items-center dtief gzyzm xuf06 mi4t3 fao71 cursor-pointer dark:has-checked:ring-offset-neutral-900">
                          <input type="radio" id="hs-pro-shprmich1" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shprmich" checked />
                          <img className="shrink-0 yl1cu r6u7e x1s1r rounded-full" src="https://images.unsplash.com/photo-1699593022913-7068606059c8?q=80&w=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                        </label>

                        <label htmlFor="hs-pro-shprmich2" className="yl1cu r6u7e rounded-full flex flex-col justify-center items-center dtief gzyzm xuf06 mi4t3 fao71 cursor-pointer dark:has-checked:ring-offset-neutral-900">
                          <input type="radio" id="hs-pro-shprmich2" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shprmich" />
                          <img className="shrink-0 yl1cu r6u7e x1s1r rounded-full" src="https://images.unsplash.com/photo-1704949834515-e9d11a0ceb9a?q=80&w=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                        </label>

                        <label htmlFor="hs-pro-shprmich3" className="yl1cu r6u7e rounded-full flex flex-col justify-center items-center dtief gzyzm xuf06 mi4t3 fao71 cursor-pointer dark:has-checked:ring-offset-neutral-900">
                          <input type="radio" id="hs-pro-shprmich3" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shprmich" />
                          <img className="shrink-0 yl1cu r6u7e x1s1r rounded-full" src="https://images.unsplash.com/photo-1699198489130-2e02f3726612?q=80&w=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                        </label>

                        <label htmlFor="hs-pro-shprmich4" className="yl1cu r6u7e rounded-full flex flex-col justify-center items-center dtief gzyzm xuf06 mi4t3 fao71 cursor-pointer dark:has-checked:ring-offset-neutral-900">
                          <input type="radio" id="hs-pro-shprmich4" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shprmich" />
                          <img className="shrink-0 yl1cu r6u7e x1s1r rounded-full" src="https://images.unsplash.com/photo-1695686331766-16a2c3c2c382?q=80&w=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                        </label>

                        <label htmlFor="hs-pro-shprmich5" className="yl1cu r6u7e rounded-full flex flex-col justify-center items-center dtief gzyzm xuf06 mi4t3 fao71 cursor-pointer dark:has-checked:ring-offset-neutral-900">
                          <input type="radio" id="hs-pro-shprmich5" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shprmich" />
                          <img className="shrink-0 yl1cu r6u7e x1s1r rounded-full" src="https://images.unsplash.com/photo-1695748966450-3abe5c25b481?q=80&w=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                        </label>

                        <label htmlFor="hs-pro-shprmich6" className="yl1cu r6u7e rounded-full flex flex-col justify-center items-center dtief gzyzm xuf06 mi4t3 fao71 cursor-pointer dark:has-checked:ring-offset-neutral-900">
                          <input type="radio" id="hs-pro-shprmich6" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" value="@@title" name="hs-pro-shprmich" />
                          <img className="shrink-0 yl1cu r6u7e x1s1r rounded-full" src="https://images.unsplash.com/photo-1700853012811-ce0a42d2b6d3?q=80&w=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                        </label>
                      </div>
                    </div>

                    <div>
                      <h5 className="wyf4w sikx1 text-sm text-gray-800 dark:text-neutral-200">
                        Select size
                      </h5>

                      <div className="ylm8n zez8u g27d7">
                        <label htmlFor="hs-pro-shchms-us-6and5" className="oze3y group relative flex justify-center items-center vyfcq dtief xs2f2 bg-white text-gray-800 rsdjd border-gray-200 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200
                        vg053 dark:has-checked:text-indigo-500
                        gzyzm dark:has-checked:border-indigo-500
                        kuxro
                        fao71 dark:has-checked:ring-indigo-500
                        has-disabled:pointer-events-none
                        has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
                        has-disabled:after:absolute
                        has-disabled:after:inset-0
                        has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
                        dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)] ">
                          <input type="radio" id="hs-pro-shchms-us-6and5" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" name="hs-pro-shchms" />
                          <span className="block">
                            6.5
                          </span>
                        </label>

                        <label htmlFor="hs-pro-shchms-us-7" className="oze3y group relative flex justify-center items-center vyfcq dtief xs2f2 bg-white text-gray-800 rsdjd border-gray-200 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200
                        vg053 dark:has-checked:text-indigo-500
                        gzyzm dark:has-checked:border-indigo-500
                        kuxro
                        fao71 dark:has-checked:ring-indigo-500
                        has-disabled:pointer-events-none
                        has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
                        has-disabled:after:absolute
                        has-disabled:after:inset-0
                        has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
                        dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)] ">
                          <input type="radio" id="hs-pro-shchms-us-7" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" name="hs-pro-shchms" />
                          <span className="block">
                            7
                          </span>
                        </label>

                        <label htmlFor="hs-pro-shchms-us-7and5" className="oze3y group relative flex justify-center items-center vyfcq dtief xs2f2 bg-white text-gray-800 rsdjd border-gray-200 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200
                        vg053 dark:has-checked:text-indigo-500
                        gzyzm dark:has-checked:border-indigo-500
                        kuxro
                        fao71 dark:has-checked:ring-indigo-500
                        has-disabled:pointer-events-none
                        has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
                        has-disabled:after:absolute
                        has-disabled:after:inset-0
                        has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
                        dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)] ">
                          <input type="radio" id="hs-pro-shchms-us-7and5" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" name="hs-pro-shchms" disabled />
                          <span className="block">
                            7.5
                          </span>
                        </label>

                        <label htmlFor="hs-pro-shchms-us-8" className="oze3y group relative flex justify-center items-center vyfcq dtief xs2f2 bg-white text-gray-800 rsdjd border-gray-200 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200
                        vg053 dark:has-checked:text-indigo-500
                        gzyzm dark:has-checked:border-indigo-500
                        kuxro
                        fao71 dark:has-checked:ring-indigo-500
                        has-disabled:pointer-events-none
                        has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
                        has-disabled:after:absolute
                        has-disabled:after:inset-0
                        has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
                        dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)] ">
                          <input type="radio" id="hs-pro-shchms-us-8" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" name="hs-pro-shchms" />
                          <span className="block">
                            8
                          </span>
                        </label>

                        <label htmlFor="hs-pro-shchms-us-8and5" className="oze3y group relative flex justify-center items-center vyfcq dtief xs2f2 bg-white text-gray-800 rsdjd border-gray-200 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200
                        vg053 dark:has-checked:text-indigo-500
                        gzyzm dark:has-checked:border-indigo-500
                        kuxro
                        fao71 dark:has-checked:ring-indigo-500
                        has-disabled:pointer-events-none
                        has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
                        has-disabled:after:absolute
                        has-disabled:after:inset-0
                        has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
                        dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)] ">
                          <input type="radio" id="hs-pro-shchms-us-8and5" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" name="hs-pro-shchms" disabled />
                          <span className="block">
                            8.5
                          </span>
                        </label>

                        <label htmlFor="hs-pro-shchms-us-9" className="oze3y group relative flex justify-center items-center vyfcq dtief xs2f2 bg-white text-gray-800 rsdjd border-gray-200 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200
                        vg053 dark:has-checked:text-indigo-500
                        gzyzm dark:has-checked:border-indigo-500
                        kuxro
                        fao71 dark:has-checked:ring-indigo-500
                        has-disabled:pointer-events-none
                        has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
                        has-disabled:after:absolute
                        has-disabled:after:inset-0
                        has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
                        dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)] ">
                          <input type="radio" id="hs-pro-shchms-us-9" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" name="hs-pro-shchms" disabled />
                          <span className="block">
                            9
                          </span>
                        </label>

                        <label htmlFor="hs-pro-shchms-us-9and5" className="oze3y group relative flex justify-center items-center vyfcq dtief xs2f2 bg-white text-gray-800 rsdjd border-gray-200 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200
                        vg053 dark:has-checked:text-indigo-500
                        gzyzm dark:has-checked:border-indigo-500
                        kuxro
                        fao71 dark:has-checked:ring-indigo-500
                        has-disabled:pointer-events-none
                        has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
                        has-disabled:after:absolute
                        has-disabled:after:inset-0
                        has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
                        dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)] ">
                          <input type="radio" id="hs-pro-shchms-us-9and5" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" name="hs-pro-shchms" />
                          <span className="block">
                            9.5
                          </span>
                        </label>

                        <label htmlFor="hs-pro-shchms-us-10" className="oze3y group relative flex justify-center items-center vyfcq dtief xs2f2 bg-white text-gray-800 rsdjd border-gray-200 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200
                        vg053 dark:has-checked:text-indigo-500
                        gzyzm dark:has-checked:border-indigo-500
                        kuxro
                        fao71 dark:has-checked:ring-indigo-500
                        has-disabled:pointer-events-none
                        has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
                        has-disabled:after:absolute
                        has-disabled:after:inset-0
                        has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
                        dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)] ">
                          <input type="radio" id="hs-pro-shchms-us-10" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" name="hs-pro-shchms" disabled />
                          <span className="block">
                            10
                          </span>
                        </label>

                        <label htmlFor="hs-pro-shchms-us-10and5" className="oze3y group relative flex justify-center items-center vyfcq dtief xs2f2 bg-white text-gray-800 rsdjd border-gray-200 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200
                        vg053 dark:has-checked:text-indigo-500
                        gzyzm dark:has-checked:border-indigo-500
                        kuxro
                        fao71 dark:has-checked:ring-indigo-500
                        has-disabled:pointer-events-none
                        has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
                        has-disabled:after:absolute
                        has-disabled:after:inset-0
                        has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
                        dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)] ">
                          <input type="radio" id="hs-pro-shchms-us-10and5" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" name="hs-pro-shchms" />
                          <span className="block">
                            10.5
                          </span>
                        </label>

                        <label htmlFor="hs-pro-shchms-us-11" className="oze3y group relative flex justify-center items-center vyfcq dtief xs2f2 bg-white text-gray-800 rsdjd border-gray-200 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200
                        vg053 dark:has-checked:text-indigo-500
                        gzyzm dark:has-checked:border-indigo-500
                        kuxro
                        fao71 dark:has-checked:ring-indigo-500
                        has-disabled:pointer-events-none
                        has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
                        has-disabled:after:absolute
                        has-disabled:after:inset-0
                        has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
                        dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)] ">
                          <input type="radio" id="hs-pro-shchms-us-11" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" name="hs-pro-shchms" disabled />
                          <span className="block">
                            11
                          </span>
                        </label>

                        <label htmlFor="hs-pro-shchms-us-11and5" className="oze3y group relative flex justify-center items-center vyfcq dtief xs2f2 bg-white text-gray-800 rsdjd border-gray-200 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200
                        vg053 dark:has-checked:text-indigo-500
                        gzyzm dark:has-checked:border-indigo-500
                        kuxro
                        fao71 dark:has-checked:ring-indigo-500
                        has-disabled:pointer-events-none
                        has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
                        has-disabled:after:absolute
                        has-disabled:after:inset-0
                        has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
                        dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)] ">
                          <input type="radio" id="hs-pro-shchms-us-11and5" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" name="hs-pro-shchms" />
                          <span className="block">
                            11.5
                          </span>
                        </label>

                        <label htmlFor="hs-pro-shchms-us-12" className="oze3y group relative flex justify-center items-center vyfcq dtief xs2f2 bg-white text-gray-800 rsdjd border-gray-200 cursor-pointer rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200
                        vg053 dark:has-checked:text-indigo-500
                        gzyzm dark:has-checked:border-indigo-500
                        kuxro
                        fao71 dark:has-checked:ring-indigo-500
                        has-disabled:pointer-events-none
                        has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
                        has-disabled:after:absolute
                        has-disabled:after:inset-0
                        has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
                        dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)] ">
                          <input type="radio" id="hs-pro-shchms-us-12" className="hidden w4poy border-gray-200 g41z1 g22e3 axcnw dark:text-indigo-500 dark:border-neutral-700 dark:focus:ring-neutral-900" name="hs-pro-shchms" />
                          <span className="block">
                            12
                          </span>
                        </label>
                      </div>

                      <p className="ja90s inline-flex items-center gap-x-1 text-sm bde0o">
                        <svg className="shrink-0 h6zia" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        Low in stock
                      </p>
                    </div>
                  </div>

                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex g27d7">
                      <select className="py-3 srbq1 ep58o inline-block border-gray-200 rounded-lg text-sm text-gray-800 cursor-pointer nzmya o0e5q o0e5q m5fuw d16zw disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-300 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        <option selected>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>

                      <button type="button" className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm sikx1 rounded-lg rsdjd azddh y73k3 kew0r xengx disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden xo3eb dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200">
                        Add to cart
                      </button>

                      <button type="button" className="py-3 px-4 relative inline-flex justify-center items-center b1nd2 text-sm sikx1 rounded-lg rsdjd border-gray-200 bg-white text-gray-800 hj07t nzmya disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden d16zw dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-300">
                        <span className="et50x">Favorite</span>
                        <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hs-pro-shrpccid" className="fixed mq18k left-0 sm:start-auto kji94 tbd2k u5fvb xt4yn w-full haizg">
        <div className="vyel6 flex flex-col bg-white rsdjd border-gray-200 piqys poi4v dark:bg-neutral-800 dark:border-neutral-700">
          <div className="py-3 l8aat relative dtief">
            <h5 className="sikx1 text-gray-800 dark:text-neutral-200">
              Rate your purchases
            </h5>

            <div className="absolute mjk73 t5w1f">
              <button type="button" className="qqwrg inline-flex justify-center items-center gap-x-2 rounded-full rsdjd azddh f4yn1 text-gray-800 cq7a3 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden f6db7 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" data-hs-remove-element="#hs-pro-shrpccid">
                <span className="et50x">Close</span>
                <svg className="shrink-0 b9gop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="jxswk">
            <div className="relative">
              <div className="overflow-x-hidden">
                <div className="hs-carousel w-full flex sbso4 sa2ld i6bn4 overflow-x-auto ndnt5 y0qzi bpysz lwuhe basss ad2ng n3xnc dark:[&::-webkit-scrollbar-track]:bg-neutral-800 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-600">
                  <div className="hs-carousel-body flex flex-nowrap opacity-0 oeanj mx4xe">
                    <div className="hs-carousel-slide c44he jxswk">
                      <div className="tbd2k h-full bg-white rsdjd border-gray-200 piqys dark:bg-neutral-800 dark:border-neutral-700">
                        <div className="h-full flex vyfcq">
                          <div className="grow-1 h-full flex flex-col">
                            <div>
                              <h4 className="sikx1 text-sm text-gray-800 dark:text-neutral-200">
                                Windrunner
                              </h4>
                              <p className="rwavo text-sm jy5gh dark:text-neutral-400">
                                Color: White, Size: M
                              </p>
                            </div>
                            <div className="mt-auto">
                              <button type="button" className="s53ws sfv8v flex items-center text-sm text-start f4yn1 text-gray-800 rounded-lg cq7a3 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden f6db7 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600">
                                Rate product
                              </button>
                            </div>
                          </div>
                          <img className="shrink-0 fl6qw xz6cg x1s1r f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                        </div>
                      </div>
                    </div>

                    <div className="hs-carousel-slide c44he jxswk">
                      <div className="tbd2k h-full bg-white rsdjd border-gray-200 piqys dark:bg-neutral-800 dark:border-neutral-700">
                        <div className="h-full flex vyfcq">
                          <div className="grow-1 h-full flex flex-col">
                            <div>
                              <h4 className="sikx1 text-sm text-gray-800 dark:text-neutral-200">
                                White Jeans
                              </h4>
                              <p className="rwavo text-sm jy5gh dark:text-neutral-400">
                                Color: Gray, Size: M
                              </p>
                            </div>
                            <div className="mt-auto">
                              <button type="button" className="s53ws sfv8v flex items-center text-sm text-start f4yn1 text-gray-800 rounded-lg cq7a3 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden f6db7 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600">
                                Rate product
                              </button>
                            </div>
                          </div>
                          <img className="shrink-0 fl6qw xz6cg x1s1r f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                        </div>
                      </div>
                    </div>

                    <div className="hs-carousel-slide c44he jxswk">
                      <div className="tbd2k h-full bg-white rsdjd border-gray-200 piqys dark:bg-neutral-800 dark:border-neutral-700">
                        <div className="h-full flex vyfcq">
                          <div className="grow-1 h-full flex flex-col">
                            <div>
                              <h4 className="sikx1 text-sm text-gray-800 dark:text-neutral-200">
                                Embroidered Hoodie
                              </h4>
                              <p className="rwavo text-sm jy5gh dark:text-neutral-400">
                                Color: White, Size: US 10
                              </p>
                            </div>
                            <div className="mt-auto">
                              <button type="button" className="s53ws sfv8v flex items-center text-sm text-start f4yn1 text-gray-800 rounded-lg cq7a3 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden f6db7 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600">
                                Rate product
                              </button>
                            </div>
                          </div>
                          <img className="shrink-0 fl6qw xz6cg x1s1r f4yn1 er6t7 dark:bg-neutral-800" src="https://images.unsplash.com/photo-1708443683276-8a3eb30faef2?q=80&w=560&h=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute zoyba -start-2 inline-flex justify-center items-center fjwwc bg-white rsdjd rxmp4 text-gray-800 rounded-full hj07t d05xb -translate-y-1/2 focus:outline-hidden">
                <span className="f8p8s" aria-hidden="true">
                  <svg className="shrink-0 yhc35" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </span>
                <span className="et50x">Previous</span>
              </button>
              <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute zoyba -end-2 inline-flex justify-center items-center fjwwc bg-white rsdjd rxmp4 text-gray-800 rounded-full hj07t d05xb -translate-y-1/2 focus:outline-hidden">
                <span className="et50x">Next</span>
                <span className="f8p8s" aria-hidden="true">
                  <svg className="shrink-0 yhc35" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="tbd2k">
            <button type="button" className="gdxvw px-4 w-full inline-flex justify-center items-center b1nd2 text-sm rounded-lg rsdjd border-gray-200 bg-white text-gray-800 hj07t nzmya disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden d16zw dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-300" data-hs-remove-element="#hs-pro-shrpccid">
              I'll leave a review later
            </button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Template;