class Github {
  constructor() {
    this.client_id = "43c889c681b0941e90d8";
    this.client_secret = "a01fa03b0871a7cda5e0c2117b0d1f570521e14f";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileRespone = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposRespone = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileRespone.json();
    const repos = await reposRespone.json();
    return {
      profile,
      repos,
    };
  }
}
