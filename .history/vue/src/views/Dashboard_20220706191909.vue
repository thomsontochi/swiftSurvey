<template>
    
     <!-- Page title starts -->

        <div class=" bg-black w-full h-full my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
            <div>
                <h4 class="text-2xl font-bold leading-tight text-gray-800">Dashboard</h4>

                <ul class="flex flex-col md:flex-row items-start md:items-center text-gray-600 text-sm mt-3"> </ul>
            </div>
            <!-- <div class="mt-6 lg:mt-0">
                <button class="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-100 rounded text-indigo-700 px-6 py-2 text-sm">Back</button>
                <button class="transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none border bg-indigo-700 rounded text-white px-8 py-2 text-sm">Edit Profile</button>
            </div> -->
        </div>
        <!-- Page title ends -->

        
        <div class="container mx-auto px-6">
            <!-- Remove class [ h-64 ] when adding a card block -->
            <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
            <div class="w-full h-64 rounded border-dashed border-2 border-gray-300">
                <!-- Place your content here -->
                <h1>content</h1>
            </div>
        </div>


</template>

<!-- <script>
export default {
    name: "LightWithGreyBackground",
    data() {
        return {
            xmlns: "http://www.w3.org/2000/svg",
            xlink: "http://www.w3.org/1999/xlink",
            profilePhoto: "https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png",
        };
    },
    methods: {
        dropdownHandler(event) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            single.classList.toggle("hidden");
        },
        MenuHandler(el, val) {
            let MainList = el.currentTarget.parentElement.getElementsByTagName("ul")[0];
            let closeIcon = el.currentTarget.parentElement.getElementsByClassName("close-m-menu")[0];
            let showIcon = el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
            if (val) {
                MainList.classList.remove("hidden");
                el.currentTarget.classList.add("hidden");
                closeIcon.classList.remove("hidden");
            } else {
                showIcon.classList.remove("hidden");
                MainList.classList.add("hidden");
                el.currentTarget.classList.add("hidden");
            }
        },
    },
};
</script> -->
