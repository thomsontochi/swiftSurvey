<template>
 <!-- component -->

            
    
            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div class="flex-1">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Hi ! There! </h2>
                        
                        <p class="mt-3 text-gray-500 dark:text-gray-300">Enter Your Information To Create An Account</p>
                    </div>

                    <div class="mt-8">
                        <form class="mt-8 space-y-6" action="#" method="POST">

                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                <input type="email" name="email" id="email" placeholder="example@example.com" required="" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="example@example.com" required="" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                </div>

                                <input type="password" name="password" id="password" placeholder="Your Password"  required="" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <button
                                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign Up
                                </button>
                            </div>

                        </form>

                        <p class="mt-6 text-sm text-center text-gray-400">Already  have an account ? < href="#" class="text-blue-500 focus:outline-none focus:underline hover:underline">
                        <router-link
                        >
                        Login In
                        <>
                        </p>
                    </div>
                </div>
            </div>

            <div class="hidden bg-cover lg:block lg:w-2/3" style="background-image: url(https://images.pexels.com/photos/3801422/pexels-photo-3801422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)">
                <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 class="text-4xl font-bold text-white">SwiftSurvey</h2>
                        
                        <p class="max-w-xl mt-3 text-gray-300"> " You don’t need to hire a lot of number-crunchers,
                         and we know you don’t trust fancy marketing surveys. 
                         Do your own surveys and draw your own conclusions.”</p>
                    </div>
                </div>
            </div>


       
</template>

<script>
export default {
  name: "login",
};
</script>
