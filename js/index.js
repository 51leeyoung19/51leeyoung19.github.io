//李力泱 06374125

var btnOnClick = function() {

    // var arr = [];
    // for (var i = 1; i < 52; i++) { //一个从1到52的数组
    //     arr.push(i);
    // }
    // arr.sort(function() { //随机打乱这个数组
    //     return Math.random() - 0.5;
    // })
    // arr.length = 5; //改写长度
    // console.log(arr); //控制台会输出5个不同的数



    $('#data').empty()
    $('#data1').empty()

    var arr = [];
    for (var i = 1; i < 52; i++) { //一个从1到52的数组
        arr.push(i);
    }
    arr.sort(function() { //随机打乱这个数组
        return Math.random() - 0.5;
    })
    arr.length = 10; //改写长度
    console.log(arr); //控制台会输出5个不同的数


    for (i = 0; i < 5; i++) {

        // 將 data 清空


        // 在記憶體產生新的 img 的html元件
        $img = $('<img>')

        // $img = $('img')[i]

        $($img).attr('src', './poker/back.png')
        $($img).attr('data-id', arr[i])
            // $($img).attr('data-point', Math.floor((arr[i] - 1) / 4))
            // $($img).attr('data-color', (arr[i] - 1) % 4)

        // 給牌一個click事件
        $($img).on('click', (eventObject) => {
            console.log('被按到了喔')
            $img = $(eventObject.target)
            id = $($img).attr('data-id')
            $($img).attr('src', './poker/pic' + id + '.png')
        })

        // 將 img 顯示在 id=data 的裡面
        $('#data').append($img)
    }

    for (i = 5; i < 10; i++) {

        // 將 data 清空


        // 在記憶體產生新的 img 的html元件
        $img = $('<img>')

        // $img = $('img')[i]

        $($img).attr('src', './poker/back.png')
        $($img).attr('data-id', arr[i])
            // $($img).attr('data-point', Math.floor((arr[i] - 1) / 4))
            // $($img).attr('data-color', (arr[i] - 1) % 4)

        // 給牌一個click事件
        $($img).on('click', (eventObject) => {
            console.log('被按到了喔')
            $img = $(eventObject.target)
            id = $($img).attr('data-id')
            $($img).attr('src', './poker/pic' + id + '.png')
        })

        // 將 img 顯示在 id=data 的裡面
        $('#data1').append($img)
    }


    // $($('img')[0]).attr('src', './poker/pic' + arr[0] + '.png')
    // $($('img')[1]).attr('src', './poker/pic' + arr[1] + '.png')
    // $($('img')[2]).attr('src', './poker/pic' + arr[2] + '.png')
    // $($('img')[3]).attr('src', './poker/pic' + arr[3] + '.png')
    // $($('img')[4]).attr('src', './poker/pic' + arr[4] + '.png')


    // // Math.floor(x) 向下取整计算
    var point0 = Math.floor((arr[0] - 1) / 4)
    var point1 = Math.floor((arr[1] - 1) / 4)
    var point2 = Math.floor((arr[2] - 1) / 4)
    var point3 = Math.floor((arr[3] - 1) / 4)
    var point4 = Math.floor((arr[4] - 1) / 4)
    var point5 = Math.floor((arr[5] - 1) / 4)
    var point6 = Math.floor((arr[6] - 1) / 4)
    var point7 = Math.floor((arr[7] - 1) / 4)
    var point8 = Math.floor((arr[8] - 1) / 4)
    var point9 = Math.floor((arr[9] - 1) / 4)


    var color0 = Math.floor((arr[0] - 1) % 4)
    var color1 = Math.floor((arr[1] - 1) % 4)
    var color2 = Math.floor((arr[2] - 1) % 4)
    var color3 = Math.floor((arr[3] - 1) % 4)
    var color4 = Math.floor((arr[4] - 1) % 4)
    var color5 = Math.floor((arr[5] - 1) % 4)
    var color6 = Math.floor((arr[6] - 1) % 4)
    var color7 = Math.floor((arr[7] - 1) % 4)
    var color8 = Math.floor((arr[8] - 1) % 4)
    var color9 = Math.floor((arr[9] - 1) % 4)


    // // 定义point 0~12 对应 "A"~"k"
    // 定义color 0~3  对应 “梅花”、“方块”、“红心”、“黑桃”

    var point = [point0, point1, point2, point3, point4];
    point.sort(function(a, b) {
        return a - b;
    });
    console.log(point);
    console.log(point[0], point[1], point[2], point[3], point[4]);

    var point1 = [point5, point6, point7, point8, point9];
    point1.sort(function(a, b) {
        return a - b;
    });
    console.log(point1);
    console.log(point1[0], point1[1], point1[2], point1[3], point1[4]);




    var color = [color0, color1, color2, color3, color4];
    color.sort();
    console.log(color);
    console.log(color[0], color[1], color[2], color[3], color[4]);


    var color1 = [color5, color6, color7, color8, color9];
    color1.sort();
    console.log(color1);
    console.log(color1[0], color1[1], color1[2], color1[3], color1[4]);





    //按第二个按钮
    var btnOnClick2 = function() {


        //分别进行定义
        var shunzi = point[0] + 1 == point[1] && point[1] + 1 == point[2] && point[2] + 1 == point[3] &&
            point[3] + 1 == point[4]

        var tonghua = color[0] == color[1] && color[1] == color[2] && color[2] == color[3] && color[3] == color[4]

        var dashun = point[0] == 0 && point[1] == 9 && point[2] == 10 && point[3] == 11 && point[4] == 12

        var sitiao = point[0] == point[1] && point[1] == point[2] && point[2] == point[3] && point[3] != point[4] || point[3] == point[4] && point[1] == point[2] && point[2] == point[3] && point[3] != point[0]

        var hulu = point[0] == point[1] && point[1] == point[2] && point[2] != point[3] && point[3] == point[4] || point[4] == point[3] && point[3] == point[2] && point[2] != point[1] && point[0] == point[1]

        var santiao = point[0] == point[1] && point[1] == point[2] || point[1] == point[2] && point[2] == point[3] || point[2] == point[3] && point[3] == point[4]

        var liangdui = point[0] == point[1] && point[2] == point[3] || point[1] == point[2] && point[3] == point[4] || point[0] == point[1] && point[3] == point[4]

        var yidui = point[0] == point[1] || point[1] == point[2] || point[2] == point[3] || point[3] == point[4]

        //定义ans0为全局变数，且从'同花大順'到'散牌'依次为9~1

        if (tonghua && dashun) {
            $('#result').val('同花大順');
            window.ans0 = 10;
        } else if (shunzi && tonghua) {
            $('#result').val('同花顺');
            window.ans0 = 9;
        } else if (sitiao) {
            $('#result').val('四條');
            window.ans0 = 8;
        } else if (hulu) {
            $('#result').val('葫蘆');
            window.ans0 = 7;
        } else if (tonghua) {
            $('#result').val('同花');
            window.ans0 = 6;
        } else if (shunzi) {
            $('#result').val('順子');
            window.ans0 = 5;
        } else if (santiao) {
            $('#result').val('三條');
            window.ans0 = 4;
        } else if (liangdui) {
            $('#result').val('兩對');
            window.ans0 = 3;
        } else if (yidui) {
            $('#result').val('一對');
            window.ans0 = 2;
        } else {
            $('#result').val('散牌');
            window.ans0 = 1;
        }

        //turn javascript local variable into global variable
        //window.niubb = "shabi";
    }
    $('#test').on('click', btnOnClick2)



    //按第三个按钮
    var btnOnClick3 = function() {


        //分别进行定义
        var shunzi1 = point1[0] + 1 == point1[1] && point1[1] + 1 == point1[2] && point1[2] + 1 == point1[3] &&
            point1[3] + 1 == point1[4]

        var tonghua1 = color1[0] == color1[1] && color1[1] == color1[2] && color1[2] == color1[3] && color1[3] == color1[4]

        var dashun1 = point1[0] == 0 && point1[1] == 9 && point1[2] == 10 && point1[3] == 11 && point1[4] == 12

        var sitiao1 = point1[0] == point1[1] && point1[1] == point1[2] && point1[2] == point1[3] && point1[3] != point1[4] || point1[3] == point1[4] && point1[1] == point1[2] && point1[2] == point1[3] && point1[3] != point1[0]

        var hulu1 = point1[0] == point1[1] && point1[1] == point1[2] && point1[2] != point1[3] && point1[3] == point1[4] || point1[4] == point1[3] && point1[3] == point1[2] && point1[2] != point1[1] && point1[0] == point1[1]

        var santiao1 = point1[0] == point1[1] && point1[1] == point1[2] || point1[1] == point1[2] && point1[2] == point1[3] || point1[2] == point1[3] && point1[3] == point1[4]

        var liangdui1 = point1[0] == point1[1] && point1[2] == point1[3] || point1[1] == point1[2] && point1[3] == point1[4] || point1[0] == point1[1] && point1[3] == point1[4]

        var yidui1 = point1[0] == point1[1] || point1[1] == point1[2] || point1[2] == point1[3] || point1[3] == point1[4]


        //定义ans1为全局变数，且从'同花大順'到'散牌'依次为9~1

        if (tonghua1 && dashun1) {
            $('#result1').val('同花大順');
            window.ans1 = 10;
        } else if (shunzi1 && tonghua1) {
            $('#result1').val('同花顺');
            window.ans1 = 9;
        } else if (sitiao1) {
            $('#result1').val('四條');
            window.ans1 = 8;
        } else if (hulu1) {
            $('#result1').val('葫蘆');
            window.ans1 = 7;
        } else if (tonghua1) {
            $('#result1').val('同花');
            window.ans1 = 6;
        } else if (shunzi1) {
            $('#result1').val('順子');
            window.ans1 = 5;
        } else if (santiao1) {
            $('#result1').val('三條');
            window.ans1 = 4;
        } else if (liangdui1) {
            $('#result1').val('兩對');
            window.ans1 = 3;
        } else if (yidui1) {
            $('#result1').val('一對');
            window.ans1 = 2;
        } else {
            $('#result1').val('散牌');
            window.ans1 = 1;
        }
    }
    $('#test1').on('click', btnOnClick3)



    //按第四个按钮
    var btnOnClick4 = function() {

        //判断user与user2的输赢结果
        if (ans0 == ans1) {
            $('#result2').val('平局');
        } else if (ans0 > ans1) {
            $('#result2').val('user1 WIN!');
        } else { $('#result2').val('user2 WIN!'); }
    }
    $('#test2').on('click', btnOnClick4)








}

$('#deal').on('click', btnOnClick)




// // // Math.floor(x) 向下取整计算
// var point0 = Math.floor((arr[0] - 1) / 4)
// var point1 = Math.floor((arr[1] - 1) / 4)
// var point2 = Math.floor((arr[2] - 1) / 4)
// var point3 = Math.floor((arr[3] - 1) / 4)
// var point4 = Math.floor((arr[4] - 1) / 4)


// var color0 = Math.floor((arr[0] - 1) % 4)
// var color1 = Math.floor((arr[1] - 1) % 4)
// var color2 = Math.floor((arr[2] - 1) % 4)
// var color3 = Math.floor((arr[3] - 1) % 4)
// var color4 = Math.floor((arr[4] - 1) % 4)

// // // 定义point 0~12 对应 "A"~"k"
// // 定义color 0~3  对应 “梅花”、“方块”、“红心”、“黑桃”

// var point = [point0, point1, point2, point3, point4];
// point.sort(function(a, b) {
//     return a - b;
// });
// console.log(point);
// console.log(point[0], point[1], point[2], point[3], point[4]);




// var color = [color0, color1, color2, color3, color4];
// color.sort();
// console.log(color);
// console.log(color[0], color[1], color[2], color[3], color[4]);


// //按第二个按钮
// var btnOnClick2 = function() {


//     //分别进行定义
//     var shunzi = point[0] + 1 == point[1] && point[1] + 1 == point[2] && point[2] + 1 == point[3] &&
//         point[3] + 1 == point[4]

//     var tonghua = color[0] == color[1] && color[1] == color[2] && color[2] == color[3] && color[3] == color[4]

//     var dashun = point[0] == 0 && point[1] == 9 && point[2] == 10 && point[3] == 11 && point[4] == 12

//     var sitiao = point[0] == point[1] && point[1] == point[2] && point[2] == point[3] && point[3] != point[4] || point[3] == point[4] && point[1] == point[2] && point[2] == point[3] && point[3] != point[0]

//     var hulu = point[0] == point[1] && point[1] == point[2] && point[2] != point[3] && point[3] == point[4] || point[4] == point[3] && point[3] == point[2] && point[2] != point[1] && point[0] == point[1]

//     var santiao = point[0] == point[1] && point[1] == point[2] || point[1] == point[2] && point[2] == point[3] || point[2] == point[3] && point[3] == point[4]

//     var liangdui = point[0] == point[1] && point[2] == point[3] || point[1] == point[2] && point[3] == point[4] || point[0] == point[1] && point[3] == point[4]

//     var yidui = point[0] == point[1] || point[1] == point[2] || point[2] == point[3] || point[3] == point[4]

//     if (tonghua && dashun) {
//         $('#result').val('同花大順');
//     } else if (shunzi && tonghua) {
//         $('#result').val('同花顺');
//     } else if (sitiao) {
//         $('#result').val('四條');
//     } else if (hulu) {
//         $('#result').val('葫蘆');
//     } else if (tonghua) {
//         $('#result').val('同花');
//     } else if (shunzi) {
//         $('#result').val('順子');
//     } else if (santiao) {
//         $('#result').val('三條');
//     } else if (liangdui) {
//         $('#result').val('兩對');
//     } else if (yidui) {
//         $('#result').val('一對');
//     } else $('#result').val('散牌');

// }

// $('#test').on('click', btnOnClick2)




//turn javascript local variable into global variable
//window.yourVarName = yourVarName;