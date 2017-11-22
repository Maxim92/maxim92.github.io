$(function () {

    let data = {
        client_id: 'ee3fb2e43cc0ca04d1bf',
        client_secret: 'd3f22e46621ebd5998cdf7a1e34a80dba8be5fcb'
    };


    $user = $('.user-input');

    let timer;
    $user.on('keyup', function () {

        clearTimeout(timer);

        if ($user.val().length === 0) {
            clear();
            return;
        }

        let fetchUser, fetchRepos;
        timer = setTimeout(async function() {

            if (fetchUser) fetchUser.abort();
            if (fetchRepos) fetchRepos.abort();

            try {
                let fetchUser = $.ajax({ url: `https://api.github.com/users/${$user.val()}`, data });
                let fetchRepos = $.ajax({ url: `https://api.github.com/users/${$user.val()}/repos`, data });
                
                let [user, repos] = await Promise.all([fetchUser, fetchRepos]);
                
                showProfile(user);
                showRepos(repos);
            }   catch (err) {
                clear();
                console.log(err);
            }
  
        }, 300);
        
    });

    function clear() {
        $('.profile').html('');
        $('.repos').html('');
    }

    function showProfile(user) {
        $('.profile').html(`
        <div class="card">
            <div class="card-header">
                <p class="card-header-title">${user.name}</p>
            </div>
            <div class="user">
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}">
                <div class="info">
                    <p class="item">关注数 <strong>${user.following}</strong></p>
                    <p class="item">粉丝数 <strong>${user.followers}</strong></p>
                    <p class="item">仓库数 <strong>${user.public_repos}</strong></p>
                    <p class="item">所在地 <strong>${user.location}</strong></p>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item" href="${user.html_url}" target="blank">
                    <i class="octicon octicon-mark-github" style="margin-right: 8px"></i>
                    Github 主页
                </a>
            </footer>
        </div>`);
    }

    function showRepos(repos) {

        repos.sort(function(a, b) {
            return b.stargzers_count - a.stargzers_count;
        });

        let reposHTML = repos.map(function(repo) {
            return `<a href="${repo.html_url}" class="panel-block panel-repo" target="_blank">
                <span class="panel-icon"><i class="oction oction-repo"></i></span>
                ${repo.name}
                <span class="star-count">${repo.stargazers_count}</span>
                <i class="oction oction-star"></i>
            </a>`;
        }).join('');

        let html = `
            <div class="panel">
                <p class="panel-heading repo">
                    <i class="oction oction-list-unordered"></i>
                    仓库列表
                </p>
                ${reposHTML}
            </div>
        `;

        $('.repos').html(html);
    }

});