
<style>
    body {
        font-family: 'Courier New', Courier, monospace;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #808080; /* Grey background */
        color: white; /* Set text color to white for better contrast */
    }
    img {
        width: 150px; /* Set a max width for the logo */
        height: auto;
        animation: spin 10s linear infinite; /* Spin animation */
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    p {
        margin-top: 20px; /* Add some space above the message */
    }
</style>

<img src="../public/logo.png" alt="Logo" />

# Welcome to your first app made with MDR!

<p>Edit this file: <code>pages/index.md</code> to change the content.</p>

