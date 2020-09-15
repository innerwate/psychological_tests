$(document).ready(function() {
//here is correct code
      $(".main_input").change(function() {
        value = jQuery(this).val();
        cell = jQuery(this).attr("cell");
        jQuery("#" + cell).attr("data-value", value);
        if ("yes" == value) {
          jQuery("#" + cell).html('<svg height="20"  width="20"  version="1.1" x="0px" y="0px" viewBox="0 0 240.608 240.608" style="enable-background:new 0 0 240.608 240.608;"xml:space="preserve"><path style="fill:#020202;" d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/><g></g><g></g><g></g> <g></g><g></g> <g></g><g></g><g></g> <g></g><g> </g><g></g> <g></g><g></g><g></g><g></g></svg>');
        } else {
          if ("no" == value) {
            jQuery("#" + cell).html(' <svg id="Capa_1" enable-background="new 0 0 386.667 386.667" height="16" viewBox="0 0 386.667 386.667" width="16" "><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg> ');
          } else {
            console.log("error sorry(");
          }
        }
        a_adulthood = document.querySelectorAll(".a_adulthood_value_td");
        var n = 0;
        var i = 0;
        for (; i < a_adulthood.length; i++) {
          if ("yes" == a_adulthood[i].dataset.value) {
            n++;
          }
        }
        $("#a_adulthood_sum").html(n + "/9");
        a_childhood = document.querySelectorAll(".a_childhood_value_td");
        var height = 0;
        i = 0;
        for (; i < a_childhood.length; i++) {
          if ("yes" == a_childhood[i].dataset.value) {
            height++;
          }
        }
        $("#a_childhood_sum").html(height + "/9");
        h_adulthood = document.querySelectorAll(".h_adulthood_value_td");
        var left = 0;
        i = 0;
        for (; i < h_adulthood.length; i++) {
          if ("yes" == h_adulthood[i].dataset.value) {
            left++;
          }
        }
        $("#h_adulthood_sum").html(left + "/9");
        h_childhood = document.querySelectorAll(".h_childhood_value_td");
        var top = 0;
        i = 0;
        for (; i < h_childhood.length; i++) {
          if ("yes" == h_childhood[i].dataset.value) {
            top++;
          }
        }
        $("#h_childhood_sum").html(top + "/9");
        c_adulthood = document.querySelectorAll(".c_adulthood_value");
        var index = 0;
        i = 0;
        for (; i < c_adulthood.length; i++) {
          if ("yes" == c_adulthood[i].value && 1 == c_adulthood[i].checked) {
            index++;
          }
        }
        c_childhood = document.querySelectorAll(".c_childhood_value");
        var translation = 0;
        i = 0;
        for (; i < c_childhood.length; i++) {
          if ("yes" == c_childhood[i].value && 1 == c_childhood[i].checked) {
            translation++;
          }
        }
        console.log("a.adult = " + n, "a.child = " + height, "h.adult = " + left, "h.child = " + top, "c.adult=" + index, "c.child=" + translation);
        $("#aHiddenAdulthood").val(n);
        $("#aHiddenChildhood").val(height);
        $("#hHiddenAdulthood").val(left);
        $("#hHiddenChildhood").val(top);
        $("#cHiddenAdulthood").val(index);
        $("#cHiddenChildhood").val(translation);
        if (height + top > 2) {
          document.querySelector("#tab2_radio1").checked = true;
          if (n > 4) {
            document.querySelector("#tab2_radio1_a").checked = true;
          } else {
            document.querySelector("#tab2_radio2_a").checked = true;
          }
          if (left > 4) {
            document.querySelector("#tab2_radio1_h").checked = true;
          } else {
            document.querySelector("#tab2_radio2_h").checked = true;
          }
          if (n > 4 || left > 4) {
            document.querySelector("#tab2_radio1").checked = true;
            document.querySelector("#mark_crit_a").dataset.mark = "true";
            document.querySelector("#mark_crit_a").innerHTML = '<svg height="20"  width="20"  version="1.1" x="0px" y="0px" viewBox="0 0 240.608 240.608" style="enable-background:new 0 0 240.608 240.608;"xml:space="preserve"><path style="fill:#020202;" d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/><g></g><g></g><g></g> <g></g><g></g> <g></g><g></g><g></g> <g></g><g> </g><g></g> <g></g><g></g><g></g><g></g></svg>';
          } else {
            document.querySelector("#mark_crit_a").dataset.mark = "false";
            document.querySelector("#mark_crit_a").innerHTML = '<svg id="Capa_1" enable-background="new 0 0 386.667 386.667" height="16" viewBox="0 0 386.667 386.667" width="16" "><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>';
          }
        } else {
          document.querySelector("#tab2_radio2").checked = true;
          document.querySelector("#mark_crit_a").dataset.mark = "false";
          document.querySelector("#mark_crit_a").innerHTML = '<svg id="Capa_1" enable-background="new 0 0 386.667 386.667" height="16" viewBox="0 0 386.667 386.667" width="16" "><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>';
        }
        if ("" != document.querySelector("#iInText").value) {
          document.querySelector("#crit_b_no").checked = true;
        }
        if (1 == document.querySelector("#crit_b_yes").checked) {
          document.querySelector("#iInText").value = "";
          document.querySelector("#iInText").setAttribute("disabled", "disabled");
          document.querySelector("#tab2_radio3").checked = true;
          document.querySelector("#mark_crit_b").dataset.mark = "true";
          document.querySelector("#mark_crit_b").innerHTML = '<svg height="20"  width="20"  version="1.1" x="0px" y="0px" viewBox="0 0 240.608 240.608" style="enable-background:new 0 0 240.608 240.608;"xml:space="preserve"><path style="fill:#020202;" d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/><g></g><g></g><g></g> <g></g><g></g> <g></g><g></g><g></g> <g></g><g> </g><g></g> <g></g><g></g><g></g><g></g></svg>';
        } else {
          if (1 == document.querySelector("#crit_b_no").checked) {
            document.querySelector("#iInText").removeAttribute("disabled");
            document.querySelector("#mark_crit_b").innerHTML = "";
            if (document.querySelector("#iInText").value >= 13) {
              document.querySelector("#tab2_radio4").checked = true;
              document.querySelector("#mark_crit_b").dataset.mark = "false";
              document.querySelector("#mark_crit_b").innerHTML = '<svg id="Capa_1" enable-background="new 0 0 386.667 386.667" height="16" viewBox="0 0 386.667 386.667" width="16" "><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>';
            } else {
              document.querySelector("#tab2_radio3").checked = true;
              document.querySelector("#mark_crit_b").dataset.mark = "true";
              document.querySelector("#mark_crit_b").innerHTML = '<svg height="20"  width="20"  version="1.1" x="0px" y="0px" viewBox="0 0 240.608 240.608" style="enable-background:new 0 0 240.608 240.608;"xml:space="preserve"><path style="fill:#020202;" d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/><g></g><g></g><g></g> <g></g><g></g> <g></g><g></g><g></g> <g></g><g> </g><g></g> <g></g><g></g><g></g><g></g></svg>';
            }
          }
        }
        if (index >= 2) {
          document.querySelector("#evidences_radio_1").checked = true;
        } else {
          document.querySelector("#evidences_radio_2").checked = true;
        }
        if (translation >= 2) {
          document.querySelector("#evidences_radio_3").checked = true;
        } else {
          document.querySelector("#evidences_radio_4").checked = true;
        }
        if (index > 1) {
          document.querySelector("#tab2_radio5").checked = true;
        } else {
          document.querySelector("#tab2_radio6").checked = true;
        }
        if (translation > 1) {
          document.querySelector("#tab2_radio7").checked = true;
        } else {
          document.querySelector("#tab2_radio8").checked = true;
        }
        if (index > 1 && translation > 1) {
          document.querySelector("#mark_crit_cd").dataset.mark = "true";
          document.querySelector("#mark_crit_cd").innerHTML = '<svg height="20"  width="20"  version="1.1" x="0px" y="0px" viewBox="0 0 240.608 240.608" style="enable-background:new 0 0 240.608 240.608;"xml:space="preserve"><path style="fill:#020202;" d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/><g></g><g></g><g></g> <g></g><g></g> <g></g><g></g><g></g> <g></g><g> </g><g></g> <g></g><g></g><g></g><g></g></svg>';
        } else {
          document.querySelector("#mark_crit_cd").dataset.mark = "false";
          document.querySelector("#mark_crit_cd").innerHTML = '<svg id="Capa_1" enable-background="new 0 0 386.667 386.667" height="16" viewBox="0 0 386.667 386.667" width="16" "><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>';
        }
        if (1 == document.querySelector("#tab2_radio9").checked) {
          document.querySelector("#mark_crit_e").dataset.mark = "true";
          document.querySelector("#mark_crit_e").innerHTML = '<svg height="20"  width="20"  version="1.1" x="0px" y="0px" viewBox="0 0 240.608 240.608" style="enable-background:new 0 0 240.608 240.608;"xml:space="preserve"><path style="fill:#020202;" d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/><g></g><g></g><g></g> <g></g><g></g> <g></g><g></g><g></g> <g></g><g> </g><g></g> <g></g><g></g><g></g><g></g></svg>';
          $(".table_other_content").fadeOut();
        } else {
          if (1 == document.querySelector("#tab2_radio10").checked) {
            document.querySelector("#mark_crit_e").dataset.mark = "false";
            document.querySelector("#mark_crit_e").innerHTML = '<svg id="Capa_1" enable-background="new 0 0 386.667 386.667" height="16" viewBox="0 0 386.667 386.667" width="16" "><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>';
            $(".table_other_content").fadeIn();
          }
        }
        var ticketID = 0;
        all_marks = document.querySelectorAll(".checkmark");
        i = 0;
        for (; i < all_marks.length; i++) {
          if ("true" == all_marks[i].dataset.mark) {
            ticketID++;
          }
        }
        console.log("count_marks= " + ticketID);
        if (4 == ticketID) {
          document.querySelector("#tab2_radio24").checked = true;
        } else {
          document.querySelector("#tab2_radio23").checked = true;
        }
        if (1 == document.querySelector("#tab2_radio24").checked) {
          // if( 1 == document.querySelector('#tab2_radio1').checked && 1 == document.querySelector('#tab2_radio1_a').checked && 1 == document.querySelector('#tab2_radio1_h').checked ){
          //   document.querySelector("#tab2_radio25").checked = true;
          // }
          // if( 1 == document.querySelector('#tab2_radio1').checked && 1 == document.querySelector('#tab2_radio1_a').checked && 0 == document.querySelector('#tab2_radio1_h').checked ){
          //   document.querySelector("#tab2_radio26").checked = true;
          // }
          // if( 1 == document.querySelector('#tab2_radio1').checked && 0 == document.querySelector('#tab2_radio1_a').checked && 1 == document.querySelector('#tab2_radio1_h').checked ){
          //   document.querySelector("#tab2_radio27").checked = true;
          // }

          document.querySelector("#tab2_radio25").checked = n > 4 && left  > 4;
          document.querySelector("#tab2_radio26").checked = n > 4 && left  < 5;
          document.querySelector("#tab2_radio27").checked = n < 5 && left  > 4;
        } else {
          document.querySelector("#tab2_radio25").checked = false;
          document.querySelector("#tab2_radio26").checked = false;
          document.querySelector("#tab2_radio27").checked = false;
        }
        if (!(1 != document.querySelector("#tab2_radio28").checked && 1 != document.querySelector("#tab2_radio29").checked)) {
          document.querySelector("#tab2_radio25").checked = false;
          document.querySelector("#tab2_radio26").checked = false;
          document.querySelector("#tab2_radio27").checked = false;
          document.querySelector("#tab2_radio24").checked = true;
        }
        if (1 == document.querySelector("#tab2_radio23").checked) {
          if (1 == document.querySelector("#tab2_radio30").checked) {
            document.querySelector("#tab2_radio23").checked = false;
            document.querySelector("#tab2_radio24").checked = true;
            document.querySelector("#tab2_radio29").checked = true;
          } else {
            document.querySelector("#tab2_radio29").checked = false;
          }
        }
      });
      $(".to_other").click(function(event) {
        event.preventDefault();
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this).closest(".form-check-inline").next(".other_content").fadeOut();
        } else {
          $(this).addClass("active");
          $(this).closest(".form-check-inline").next(".other_content").fadeIn();
          console.log("success!!!!!!");
        }
      });
      $("#btnPrint").click(function(canCreateDiscussions) {
        !function(e) {
          var t = document.getElementById(e);
          console.log(t);
          var win = window.open("", "", "left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0");
          win.document.write('<div id="print" class="contentpane">');
          win.document.write('<link rel="stylesheet" href="dist/style.css" type="text/css" />');
          win.document.write(t.innerHTML);
          win.document.write("</div>");
          win.document.close();
          win.focus();
          win.print();
        }("content_for_print");
      });
      $("#mainForm").submit(function(event) {
        inputs = document.querySelectorAll("input:disabled");
        i = 0;
        for (; i < inputs.length; i++) {
          inputs[i].removeAttribute("disabled");
        }
        var jqForm = $(this);
        $.ajax({
          type : jqForm.attr("method"),
          url : jqForm.attr("action"),
          data : jqForm.serialize(),
          dataType : "json"
        }).done(function(t) {
          console.log(t);
          for (let j = 0; j < t.length; j++) {
            console.log(t[j]);
          }
          $(".popup_for_alert").css("background-color", "#32B76C");
          document.querySelector("#linkToSaveFile").setAttribute("href", 'reports/'+t.docx_file.file_name);
          document.querySelector("#linkToSaveTxtFile").setAttribute("href", 'reports/'+t.txt_file.file_name);
          $("#mainMessage").html("Success!");
          $("#secondMessage").html("Your file has been created. You can download it from the link below.");
          var mailData = {
            docx_file_name: t.docx_file.file_name,
            patient_name:  t.patient_name,
            date: t.date,
            txt_file_name: t.txt_file.file_name
          }
          console.log(mailData);
          $.ajax({
            url: './mail.php',             // указываем URL и
            dataType : "json",    
            type: 'POST',
            data: mailData,                 // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
              
            }               
        });
        }).fail(function() {
          $(".popup_for_alert").css("background-color", "#E12C31");
          $("#mainMessage").html("Fail!");
          $("#secondMessage").html("Your file has not been created. Something is wrong :(");
        });
        event.preventDefault();
      });
      $("#postDataBtn").click(function() {
        $(".overlay_for_alert_popup").fadeIn();
        $(".popup_for_alert").fadeIn();
      });
      $(".overlay_for_alert_popup").click(function() {
        $(".overlay_for_alert_popup").css("display", "none");
        $(".popup_for_alert").css("display", "none");
      });
      $(".close_popup").click(function() {
        $(".overlay_for_alert_popup").css("display", "none");
        $(".popup_for_alert").css("display", "none");
      });
    });
