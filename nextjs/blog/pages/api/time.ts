export default function handler(req: any, res: any) {
  let date = new Date();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  let h = date.getHours();
  let m = date.getMinutes();
  return res.status(200).json(month + "월" + day + "일" + h + "시" + m + "분");
}
