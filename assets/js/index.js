


$("#add_user").submit(function(event){
    alert("Thêm nhân viên thành công!");
})

$("#add_job").submit(function(event){
    alert("Thêm ca làm việc thành công!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Cập nhật thông tin nhân viên thành công!");
    })

})

$("#update_job").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/jobs/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Cập nhật ca làm việc thành công!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Bạn có muốn xoá nhân viên này không ?")){
            $.ajax(request).done(function(response){
                alert("Xoá nhân viên thành công!");
                location.reload();
            })
        }

    })
}

if(window.location.pathname == "/job"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/jobs/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Bạn có muốn xoá ca làm việc này không?")){
            $.ajax(request).done(function(response){
                alert("Ca làm việc đã xoá thành công!");
                location.reload();
            })
        }

    })
}
