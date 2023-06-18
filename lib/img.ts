export const portraits = [
  "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/kellen-riggin-wIUhgVtq7Ys-unsplash.jpg",
  "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/jason-ryan-d-01lP3lw9Q-unsplash.jpg",
  "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/oksana-JlRUdWLHdSI-unsplash.jpg",
  "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/jeremy-bishop-VUtdsFw79jo-unsplash.jpg",
  "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/philip-myrtorp-3NWrt0JPf3Q-unsplash.jpg",
]

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * portraits.length); // 生成随机索引
  return portraits[randomIndex]; // 返回随机选择的图片链接
};
