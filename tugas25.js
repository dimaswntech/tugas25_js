function tugas(){
    var data = [ 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya : ",data.toString());
    data = data.sort();
    console.log("Ascending :", data.toString());
    data = data.reverse();
    console.log("Descending :", data.toString());
    data=data.filter(data => {
return data >= 10;
    });
    console.log("FIlter >10 : ", data.toString());
}
tugas();