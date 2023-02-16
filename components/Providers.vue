<template>
    <div class="grid grid-rows-auto gap-1 place-items-stretch">
        <button
            class="p-2 mt-2 select-none rounded-[1rem] cursor-pointer bg-white dark:bg-black dark:text-white transition duration-150 shadow-md hover:shadow-lg dark:shadow-none google-button {{ loading ? 'opacity-50 cursor-not-allowed' : '' }}"
            :value="loading ? 'Loading' : 'Sign in with Google'" :disabled="loading" @click="handleGoogleLogin">
            <template v-if="loading">
                <Icon name="material-symbols:change-circle" />
                <span class="ml-1">Loading...</span>
            </template>
            <template v-else>
                <Icon name="bi:google" size="30" class="text-red-500" />
            </template>
        </button>
        <button
            class="p-2 mt-2 select-none rounded-[1rem] cursor-pointer bg-white dark:bg-black dark:text-white transition duration-150 shadow-md hover:shadow-lg dark:shadow-none twitter-button {{ loading ? 'opacity-50 cursor-not-allowed' : '' }}"
            :value="loading ? 'Loading' : 'Sign in with Twitter'" :disabled="loading" @click="handleTwitterLogin">
            <template v-if="loading">
                <Icon name="material-symbols:change-circle" />
                <span class="ml-1">Loading...</span>
            </template>
            <template v-else>
                <Icon name="bi:twitter" size="30" class="text-sky-400" />
            </template>
        </button>
        <button
            class="p-2 mt-2 select-none rounded-[1rem] cursor-pointer bg-white dark:bg-black dark:text-white transition duration-150 shadow-md hover:shadow-lg dark:shadow-none facebook-button {{ loading ? 'opacity-50 cursor-not-allowed' : '' }}"
            :value="loading ? 'Loading' : 'Sign in with Facebook'" :disabled="loading" @click="handleFacebookLogin">
            <template v-if="loading">
                <Icon name="material-symbols:change-circle" />
                <span class="ml-1">Loading...</span>
            </template>
            <template v-else>
                <Icon name="bi:facebook" size="30" class="text-blue-500" />
            </template>
        </button>
        <button
            class="p-2 mt-2 select-none rounded-[1rem] cursor-pointer bg-white dark:bg-black dark:text-white transition duration-150 shadow-md hover:shadow-lg dark:shadow-none spotify-button {{ loading ? 'opacity-50 cursor-not-allowed' : '' }}"
            :value="loading ? 'Loading' : 'Sign in with Spotify'" :disabled="loading" @click="handleSpotifyLogin">
            <template v-if="loading">
                <Icon name="material-symbols:change-circle" />
                <span class="ml-1">Loading...</span>
            </template>
            <template v-else>
                <Icon name="bi:spotify" size="30" class="text-lime-500" />
            </template>
        </button>
        <button
            class="p-2 mt-2 select-none rounded-[1rem] cursor-pointer bg-white dark:bg-black dark:text-white transition duration-150 shadow-md hover:shadow-lg dark:shadow-none twitch-button {{ loading ? 'opacity-50 cursor-not-allowed' : '' }}"
            :value="loading ? 'Loading' : 'Sign in with Twitch'" :disabled="loading" @click="handleTwitchLogin">
            <template v-if="loading">
                <Icon name="material-symbols:change-circle" />
                <span class="ml-1">Loading...</span>
            </template>
            <template v-else>
                <Icon name="bi:twitch" size="30" class="text-violet-600" />
            </template>
        </button>
    </div>
</template>


<script setup>
const supabase = useSupabaseClient();
const loading = ref(false);

const handleGoogleLogin = async () => {
    loading.value = true;
    try {
        const { error, user } = await supabase.auth.signInWithOAuth({
            provider: "google",
        });
        if (error) throw error;
        console.log("Successfully signing in with Google!");
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
};

const handleTwitterLogin = async () => {
    loading.value = true;
    try {
        const { error, user } = await supabase.auth.signInWithOAuth({
            provider: "twitter",
        });
        if (error) throw error;
        console.log("Successfully signing in with Twitter!");
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
};

const handleFacebookLogin = async () => {
    loading.value = true;
    try {
        const { error, user } = await supabase.auth.signInWithOAuth({
            provider: "facebook",
        });
        if (error) throw error;
        console.log("Successfully signing in with Facebook!");
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
};

const handleSpotifyLogin = async () => {
    loading.value = true;
    try {
        const { error, user } = await supabase.auth.signInWithOAuth({
            provider: "spotify",
        });
        if (error) throw error;
        console.log("Successfully signing in with Spotify!");
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
};

const handleTwitchLogin = async () => {
    loading.value = true;
    try {
        const { error, user } = await supabase.auth.signInWithOAuth({
            provider: "twitch",
        });
        if (error) throw error;
        console.log("Successfully signing in with Twitch!");
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
};
</script>