// วางใน Google Sheet > ส่วนขยาย > Apps Script แล้ว Deploy เป็น Web app (Execute as: Me, Access: Anyone)
const ADMIN_KEY = "noodle1234";
const SKUS = ["TOM01", "MOO01"];
const HEAD = ["OrderID","Time","Name","Phone","Address","Zip", ...SKUS.map(s=>"qty_"+s), "Total","Status"];

function sheet_(){
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName("Orders") || ss.insertSheet("Orders");
  if (sh.getLastRow() === 0) sh.appendRow(HEAD);
  return sh;
}
function doPost(e){
  const d = JSON.parse(e.postData.contents);
  const id = "ORD" + Utilities.formatDate(new Date(),"Asia/Bangkok","yyMMddHHmmss");
  sheet_().appendRow([id,new Date(),d.name,"'"+d.phone,d.address,"'"+d.zip,...SKUS.map(s=>d.items[s]||0),d.total,"NEW"]);
  return ContentService.createTextOutput("ok");
}
function doGet(e){
  if (e.parameter.key !== ADMIN_KEY) return json_({error:"unauthorized"});
  const sh = sheet_(), v = sh.getDataRange().getValues();
  if (e.parameter.pack){
    for (let i=1;i<v.length;i++) if (v[i][0]===e.parameter.pack) sh.getRange(i+1,HEAD.indexOf("Status")+1).setValue("PACKED");
    return json_({ok:true});
  }
  const h = v[0];
  return json_(v.slice(1).map(r=>Object.fromEntries(h.map((k,i)=>[k,r[i]]))));
}
function json_(o){return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);}
