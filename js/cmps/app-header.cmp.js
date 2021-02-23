export default {
  template: `
   <header class="app-header">
        <h1>Books store</h1>
        <nav class="nav-list">
           <router-link active-class="active-link" to="/" exact>Home</router-link> |
           <router-link to="/book">Books</router-link> |
           <router-link to="/about">About</router-link>
        </nav>
    </header>
    `,

}
