module.exports = function() {
    var t = [ "这是我新做的头像，你要不要试试?", "这个装饰好看吗？", "皮一下很开心!", "向你推荐一款头像制作工具" ];
    return t[Math.floor(Math.random() * t.length + 1) - 1];
};