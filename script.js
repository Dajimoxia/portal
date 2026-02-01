//scroll_scaleup
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('#top').css({
        transform: 'scale('+(80 + scroll/15)/80+')',
        top: -(scroll/10) + "%",
    });
});
//page_loading_point
window.onload = function() {
    window.location.hash = "top"
};
//scroll_effect
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('#secondr');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 100;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });

//theme-toggl
const btn = document.getElementById('theme-toggle');
const html = document.documentElement;

        // 1. OSのダークモード設定を取得するクエリ
        // matchMediaを使うと、CSSの @media (prefers-color-scheme: dark) と同じ判定ができます
const osDarkParams = window.matchMedia('(prefers-color-scheme: dark)');

        // テーマを適用してボタンの文字を変える関数
const applyTheme = (theme) => {
  html.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    btn.textContent = 'ライトモードにする';
  } else {
      btn.textContent = 'ダークモードにする';
    }
};

        // 2. 初期化処理：優先順位に従ってテーマを決める
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
                // A. 保存された設定があればそれを使う
    applyTheme(savedTheme);
  } else {
                // B. 保存設定がなければOSの設定に従う
      const initialTheme = osDarkParams.matches ? 'dark' : 'light';
      applyTheme(initialTheme);
    }
};

        // ページ読み込み時に実行
initTheme();

        // 3. ボタンクリック時の処理（手動切り替え）
btn.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  applyTheme(newTheme);
            
            // 手動で切り替えたら必ず保存する（次回からこれが優先される）
  localStorage.setItem('theme', newTheme);
});

        // 4. (オプション) OSの設定が変更された時に追従する
        // ただし、ユーザーがすでに手動設定(localStorage)している場合は無視する設定にしています
osDarkParams.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    applyTheme(newTheme);
  }
});