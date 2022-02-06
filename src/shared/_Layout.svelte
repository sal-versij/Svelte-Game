<header/>
<main>
    <slot/>
</main>
<footer/>

<style global lang="scss">
  html, body {
    margin: 0;
    min-height: 100%;
  }

  body {
    height: 100vh;
    display: flex;
    flex-direction: column;

    header {
    }

    main {
      flex-grow: 1;
    }

    footer {
    }
  }
</style>
