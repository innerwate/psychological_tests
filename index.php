<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel='stylesheet' href='dist/style.css'>
    <!-- <script type="text/javascript" src="dist/bundle.js"></script> -->
    <script type="text/javascript" src="src/jquery.js"></script>
    <script type="text/javascript" src="src/sticky-sidebar.js"></script>
    <script type="text/javascript" src="src/main.js"></script>
    <script type="text/javascript" src="src/sidebar.js"></script>


</head>

<body>
    <div id="all_content">

        <div class="page-wrap container content" id="content">
            <div class="row  " id="content_for_print">
            <form action="document_generator.php" method="post" id="mainForm">
                <div class="name_birthday col-12" id="startPage">
                    <div class="name_of_the_patient col-12">
                        <div class="col-3"><span>Name of the patient: </span></div>
                        <div class="col-9"><input type="text" name="patient_name"></div>
                    </div>
                    <div class="name_of_the_patient col-12">
                        <div class="col-3"><span>Psychologist`s name: </span></div>
                        <div class="col-9"><input type="text" name="psychologist_name"></div>
                    </div>
                    <div class="date_of_birthday col-12">
                        <div class="col-3"><span>Date of birth: </span></div>
                        <div class="col-9"> <input type="date" name="patient_birthday"></div>
                    </div>

                </div>
                <?php require_once('part1.php'); ?>
                <?php require_once('part2.php'); ?>
                <?php require_once('part3.php'); ?>
                <div class="evidences_wrap col-12">
                    <div class="body_evidences col-8">

                        <div class="item_evidences"><span><b>Adulthood: </b>Evidence of impairment in ≥2 areas? </span>
                        </div>
                        <div class="item_evidences"><span><b>Childhood: </b>Evidence of impairment in ≥2 areas? </span>
                        </div>
                    </div>
                    <div class="radio_edcidences col-4">
                        <div class="radio_item">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="evidences_radio1"
                                    id="evidences_radio_1" value="yes" disabled>
                                <label class="form-check-label" for="evidences_radio_1">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="evidences_radio1"
                                    id="evidences_radio_2" value="no" disabled>
                                <label class="form-check-label" for="evidences_radio_2">No</label>
                            </div>
                        </div>
                        <div class="radio_item">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" disabled type="radio" name="evidences_radio2"
                                    id="evidences_radio_3" value="yes">
                                <label class="form-check-label" for="evidences_radio_3">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="evidences_radio2"
                                    id="evidences_radio_4" value="no" disabled>
                                <label class="form-check-label" for="evidences_radio_4">No</label>
                            </div>
                        </div>
                    </div>
                    <div class="end_of_evidences col-12"><span>End of the interview. Please continue with the
                            summary.</span></div>
                    <div class="evidences_details col-12">
                        <span>Potential details:</span>
                        <textarea rows="5" class="details_area"></textarea>
                    </div>

                </div>
                <div class="main_table_wrap col-12">
                    <div class="hidden_inputs">
                        <input id="aHiddenAdulthood" type="hidden" value="0">
                        <input id="aHiddenChildhood" type="hidden" value="0">
                        <input id="hHiddenAdulthood" type="hidden" value="0">
                        <input id="hHiddenChildhood" type="hidden" value="0">
                        <input id="cHiddenAdulthood" type="hidden" value="0">
                        <input id="cHiddenChildhood" type="hidden" value="0">

                    </div>
                    <table id="summary_table">
                        <thead>
                            <tr>
                                <td>Criterion
                                    DSM-5</td>
                                <td>Symptom </td>
                                <td>Present during
                                    adulthood</td>
                                <td>Present
                                    during
                                    childhood</td>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A1a</td>
                                <td>A1. Often fails to give close attention to details, or makes careless mistakes in
                                    schoolwork, work or during other activities</td>
                                <td class="a_adulthood_value_td" data-value="" id="adulthood_a1a"></td>
                                <td class="a_childhood_value_td" data-value="" id="childhood_a1a"></td>
                            </tr>
                            <tr>
                                <td>A1b</td>
                                <td>A2. Often has difficultly sustaining attention in tasks or play activities</td>
                                <td class="a_adulthood_value_td" data-value="" id="adulthood_a1b"></td>
                                <td class="a_childhood_value_td" data-value="" id="childhood_a1b"></td>
                            </tr>
                            <tr>
                                <td>A1c</td>
                                <td>A3. Often does not seem to listen when spoken to directly</td>
                                <td class="a_adulthood_value_td" data-value="" id="adulthood_a1c"></td>
                                <td class="a_childhood_value_td" data-value="" id="childhood_a1c"></td>
                            </tr>
                            <tr>
                                <td>A1d</td>
                                <td>A4. Often does not follow through on instructions and fails to finish
                                    schoolwork, chores, or duties in the workplace</td>
                                <td class="a_adulthood_value_td" data-value="" id="adulthood_a1d"></td>
                                <td class="a_childhood_value_td" data-value="" id="childhood_a1d"></td>
                            </tr>
                            <tr>
                                <td>A1e</td>
                                <td>A5. Often has difficulty organizing tasks and activities</td>
                                <td class="a_adulthood_value_td" data-value="" id="adulthood_a1e"></td>
                                <td class="a_childhood_value_td" data-value="" id="childhood_a1e"></td>
                            </tr>
                            <tr>
                                <td>A1f</td>
                                <td>A6. Often avoids, dislikes, or is reluctant to engage in tasks that require
                                    sustained mental effort</td>
                                <td class="a_adulthood_value_td" data-value="" id="adulthood_a1f"></td>
                                <td class="a_childhood_value_td" data-value="" id="childhood_a1f"></td>
                            </tr>
                            <tr>
                                <td>A1g</td>
                                <td>A7. Often loses things necessary for tasks or activities</td>
                                <td class="a_adulthood_value_td" data-value="" id="adulthood_a1g"></td>
                                <td class="a_childhood_value_td" data-value="" id="childhood_a1g"></td>
                            </tr>
                            <tr>
                                <td>A1h</td>
                                <td>A8. Often easily distracted by extraneous stimuli </td>
                                <td class="a_adulthood_value_td" data-value="" id="adulthood_a1h"></td>
                                <td class="a_childhood_value_td" data-value="" id="childhood_a1h"></td>
                            </tr>
                            <tr>
                                <td>A1i</td>
                                <td>A9. Often forgetful in daily activities</td>
                                <td class="a_adulthood_value_td" data-value="" id="adulthood_a1i"></td>
                                <td class="a_childhood_value_td" data-value="" id="childhood_a1i"></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Total number of criteria Attention Deficit</td>
                                <td class="td_summ" id="a_adulthood_sum">0/9</td>
                                <td class="td_summ" id="a_childhood_sum">0/9</td>
                            </tr>
                            <tr>
                                <td>A2a</td>
                                <td>H/I 1. Often fidgets with or taps hands or feet or squirms in seat</td>
                                <td class="h_adulthood_value_td" data-value="" id="adulthood_h1a"></td>
                                <td class="h_childhood_value_td" data-value="" id="childhood_h1a"></td>
                            </tr>
                            <tr>
                                <td>A2b</td>
                                <td>H/I 2. Often leaves seat in situations when remaining seated is expected</td>
                                <td class="h_adulthood_value_td" data-value="" id="adulthood_h1b"></td>
                                <td class="h_childhood_value_td" data-value="" id="childhood_h1b"></td>
                            </tr>
                            <tr>
                                <td>A2c</td>
                                <td>H/I 3. Often runs about or climbs in situations where it is inappropriate</td>
                                <td class="h_adulthood_value_td" data-value="" id="adulthood_h1c"></td>
                                <td class="h_childhood_value_td" data-value="" id="childhood_h1c"></td>
                            </tr>
                            <tr>
                                <td>A2d</td>
                                <td>H/I 4. Often unable to play or take part in leisure activities quietly </td>
                                <td class="h_adulthood_value_td" data-value="" id="adulthood_h1d"></td>
                                <td class="h_childhood_value_td" data-value="" id="childhood_h1d"></td>
                            </tr>
                            <tr>
                                <td>A2e</td>
                                <td>H/I 5. Is often “on the go” acting as if “driven by a motor”</td>
                                <td class="h_adulthood_value_td" data-value="" id="adulthood_h1e"></td>
                                <td class="h_childhood_value_td" data-value="" id="childhood_h1e"></td>
                            </tr>
                            <tr>
                                <td>A2f</td>
                                <td>H/I 6. Often talks excessively</td>
                                <td class="h_adulthood_value_td" data-value="" id="adulthood_h1f"></td>
                                <td class="h_childhood_value_td" data-value="" id="childhood_h1f"></td>
                            </tr>
                            <tr>
                                <td>A2g</td>
                                <td>H/I 7. Often blurts out an answer before a question has been completed</td>
                                <td class="h_adulthood_value_td" data-value="" id="adulthood_h1g"></td>
                                <td class="h_childhood_value_td" data-value="" id="childhood_h1g"></td>
                            </tr>
                            <tr>
                                <td>A2h</td>
                                <td>H/I 8. Often has difficulty awaiting his or her turn</td>
                                <td class="h_adulthood_value_td" data-value="" id="adulthood_h1h"></td>
                                <td class="h_childhood_value_td" data-value="" id="childhood_h1h"></td>
                            </tr>
                            <tr>
                                <td>A2i</td>
                                <td>H/I 9. Often interrupts or intrudes on others</td>
                                <td class="h_adulthood_value_td" data-value="" id="adulthood_h1i"></td>
                                <td class="h_childhood_value_td" data-value="" id="childhood_h1i"></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Total number of criteria Hyperactivity/Impulsivity</td>
                                <td class="td_summ" id="h_adulthood_sum">0/9</td>
                                <td class="td_summ" id="h_childhood_sum">0/9</td>
                            </tr>
                        </tbody>


                    </table>
                </div>
                <div class="part col-12 lg-12">
                    <h2>Score form</h2>
                </div>
                <div class="second_table_wrap col-12">
                    <table id="table2_1">

                        <tbody>
                            <tr>
                                <td>DSM-5
                                    criterion A (ADHD symptoms)</td>
                                <td class="whole_td">
                                    <div class="slice_td">
                                        <h3>Childhood</h3><span>Are several (3 or more) symptoms present of A and/or
                                            HI?</span>
                                    </div>
                                    <div class="slice_td">
                                        <h3>Adulthood</h3><span>Is the number of A characteristics ≥ 5?</span><span>Is
                                            the
                                            number of H/I characteristics ≥ 5?</span>
                                    </div>
                                </td>
                                <td class="whole_td">
                                    <div class="slice_td switch">
                                        <div class="form-check form-check-inline">
                                            <input disabled data-mission="mark_crit_a_childhood"
                                                class="form-check-input score_form_main_input" type="radio"
                                                name="tab2_tr1_childhood" id="tab2_radio1" value="yes">
                                            <label class="form-check-label" for="tab2_radio1">Yes</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input disabled data-mission="mark_crit_a_childhood"
                                                class="form-check-input score_form_main_input" type="radio"
                                                name="tab2_tr1_childhood" id="tab2_radio2" value="no">
                                            <label class="form-check-label" for="tab2_radio2">No</label>
                                        </div>
                                    </div>
                                    <div class="slice_td switch">
                                        <div class="sub_slice"></div>
                                        <div class="sub_slice">
                                            <div class="form-check form-check-inline">
                                                <input disabled data-mission="mark_crit_a_adulthoodA"
                                                    class="form-check-input score_form_main_input" type="radio"
                                                    name="tab2_tr1_adulthood_a" id="tab2_radio1_a" value="yes">
                                                <label class="form-check-label" for="tab2_radio1_a">Yes</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input disabled data-mission="mark_crit_a_adulthoodA"
                                                    class="form-check-input score_form_main_input" type="radio"
                                                    name="tab2_tr1_adulthood_a" id="tab2_radio2_a" value="no">
                                                <label class="form-check-label" for="tab2_radio2_a">No</label>
                                            </div>
                                        </div>
                                        <div class="sub_slice">
                                            <div class="form-check form-check-inline">
                                                <input disabled data-mission="mark_crit_a_adulthoodH"
                                                    class="form-check-input score_form_main_input" type="radio"
                                                    name="tab2_tr1_adulthood_h" id="tab2_radio1_h" value="yes">
                                                <label class="form-check-label" for="tab2_radio1_h">Yes</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input disabled data-mission="mark_crit_a_adulthoodH"
                                                    class="form-check-input score_form_main_input" type="radio"
                                                    name="tab2_tr1_adulthood_h" id="tab2_radio2_h" value="no">
                                                <label class="form-check-label" for="tab2_radio2_h">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="whole_td">
                                    <div class="checkmark slice_td" id="mark_crit_a" data-mark="">

                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td>DSM-5
                                    criterion B (age of onset) </td>
                                <td>Are there signs of a lifelong pattern of symptoms, starting before
                                    the 12th year of age?</td>
                                <td class="switch">
                                    <div class="form-check form-check-inline">
                                        <input disabled data-mission="mark_crit_b"
                                            class="form-check-input main_input score_form_main_input" type="radio"
                                            name="tab2_tr2" id="tab2_radio3" value="yes">
                                        <label id="label_crit_b_yes" class="form-check-label"
                                            for="tab2_radio3">Yes</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input disabled data-mission="mark_crit_b"
                                            class="form-check-input main_input  score_form_main_input" type="radio"
                                            name="tab2_tr2" id="tab2_radio4" value="no">
                                        <label id="label_crit_b_no" class="form-check-label"
                                            for="tab2_radio4">No</label>
                                    </div>
                                </td>
                                <td>
                                    <div class="checkmark slice_td" id="mark_crit_b" data-mark="">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>DSM-5
                                    criterion C (pervasiveness) AND Criterion D (impairment)</td>
                                <td class="whole_td crit_c_and_d">
                                    <div class="slice_td"><span>The symptoms and the impairment are expressed in at
                                            least
                                            two
                                            domains of functioning</span></div>
                                    <div class="slice_td">Adulthood</div>
                                    <div class="slice_td">Childhood</div>
                                </td>
                                <td class="whole_td">
                                    <div class="slice_td"></div>
                                    <div class="slice_td switch">
                                        <div class="form-check form-check-inline">
                                            <input disabled data-mission="mark_crit_adulthoodCD"
                                                class="form-check-input score_form_main_input" type="radio"
                                                name="tab2_tr3_row1" id="tab2_radio5" value="yes">
                                            <label class="form-check-label" for="tab2_radio5">Yes</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input disabled data-mission="mark_crit_adulthoodCD"
                                                class="form-check-input score_form_main_input" type="radio"
                                                name="tab2_tr3_row1" id="tab2_radio6" value="no">
                                            <label class="form-check-label" for="tab2_radio6">No</label>
                                        </div>
                                    </div>
                                    <div class="slice_td switch">
                                        <div class="form-check form-check-inline">
                                            <input disabled data-mission="mark_crit_childhoodCD"
                                                class="form-check-input score_form_main_input" type="radio"
                                                name="tab2_tr3_row2" id="tab2_radio7" value="yes">
                                            <label class="form-check-label" for="tab2_radio7">Yes</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input disabled data-mission="mark_crit_childhoodCD"
                                                class="form-check-input score_form_main_input" type="radio"
                                                name="tab2_tr3_row2" id="tab2_radio8" value="no">
                                            <label class="form-check-label" for="tab2_radio8">No</label>
                                        </div>
                                    </div>
                                </td>
                                <td class="whole_td">
                                    <div class="checkmark slice_td" id="mark_crit_cd" data-mark=""> </div>

                                </td>
                            </tr>
                            <tr>
                                <td>DSM-5
                                    criterion E (exclusionary conditions) </td>
                                <td>The symptoms cannot be (better) explained by the presence of
                                    another psychiatric disorder</td>
                                <td class="switch">
                                    <div class="form-check form-check-inline">
                                        <input data-mission="mark_critE"
                                            class="form-check-input main_input  score_form_main_input" type="radio"
                                            name="tab2_tr4" id="tab2_radio9" value="yes">
                                        <label class="form-check-label" for="tab2_radio9"
                                            id="tableOtherButton">Yes</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input data-mission="mark_critE"
                                            class="form-check-input  main_input score_form_main_input" type="radio"
                                            name="tab2_tr4" id="tab2_radio10" value="no">
                                        <label class="form-check-label" for="tab2_radio10"
                                            id="tableCloseOtherButton">No</label>
                                    </div>

                                    <div class="table_other_content">
                                        <textarea rows="3" class="other_area"></textarea>
                                    </div>
                                </td>
                                <td>
                                    <div class="checkmark" id="mark_crit_e" data-mark=""></div>

                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <div class="slice_td">Is the diagnosis supported by collateral information?</div>
                                    <div class="slice_td custom_width"><span>Parent(s)/brother/sister/other, i.e.
                                        </span>
                                        <div class="wrap_tinput"><input class="table_text_input" type="text"
                                                name="in_table_tinput1"> *</div>
                                    </div>
                                    <div class="slice_td custom_width"><span>Partner/good friend/other, i.e.</span>
                                        <div class="wrap_tinput"> <input class="table_text_input" type="text"
                                                name="in_table_tinput2"> *</div>
                                    </div>
                                    <div class="slice_td">School reports</div>
                                    <div class="slice_td"><span>0 = none/little support</span><span>
                                            1 = some support</span>

                                        <span>2 = clear support</span></div>
                                </td>
                                <td>
                                    <div class="slice_td"></div>
                                    <div class="slice_td align_start pt10">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="tab2_tr5_row1"
                                                id="tab2_radio11" value="N/A">
                                            <label class="form-check-label" for="tab2_radio11">N/A</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="tab2_tr5_row1"
                                                id="tab2_radio12" value="0">
                                            <label class="form-check-label" for="tab2_radio12">0</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="tab2_tr5_row1"
                                                id="tab2_radio13" value="1">
                                            <label class="form-check-label" for="tab2_radio13">1</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="tab2_tr5_row1"
                                                id="tab2_radio14" value="2">
                                            <label class="form-check-label" for="tab2_radio14">2</label>
                                        </div>
                                    </div>
                                    <div class="slice_td align_start pt10">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="tab2_tr5_row2"
                                                id="tab2_radio15" value="N/A">
                                            <label class="form-check-label" for="tab2_radio15">N/A</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="tab2_tr5_row2"
                                                id="tab2_radio16" value="0">
                                            <label class="form-check-label" for="tab2_radio16">0</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="tab2_tr5_row2"
                                                id="tab2_radio17" value="1">
                                            <label class="form-check-label" for="tab2_radio17">1</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="tab2_tr5_row2"
                                                id="tab2_radio18" value="2">
                                            <label class="form-check-label" for="tab2_radio18">2</label>
                                        </div>
                                    </div>
                                    <div class="slice_td align_start pt10">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="tab2_tr5_row3"
                                                id="tab2_radio19" value="N/A">
                                            <label class="form-check-label" for="tab2_radio19">N/A</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="tab2_tr5_row3"
                                                id="tab2_radio20" value="0">
                                            <label class="form-check-label" for="tab2_radio20">0</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="tab2_tr5_row3"
                                                id="tab2_radio21" value="1">
                                            <label class="form-check-label" for="tab2_radio21">1</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="tab2_tr5_row3"
                                                id="tab2_radio22" value="2">
                                            <label class="form-check-label" for="tab2_radio22">2</label>
                                        </div>
                                    </div>
                                    <div class="slice_td expl_div"><span>Explanation:</span>
                                        <div class="other_content">
                                            <textarea rows="3" class="other_area"></textarea>
                                        </div>
                                    </div>
                                </td>
                                <td></td>
                            </tr>



                        </tbody>

                    </table>
                    <table id="table2_2">

                        <tbody>
                            <tr>
                                <td></td>
                                <td>Diagnosis
                                    ADHD**</td>
                                <td class="adhd_td">

                                    <div class="form-check ">
                                        <input disabled class="form-check-input main_input" type="radio" name="tab2_tr6_row1"
                                            id="tab2_radio23" value="no">
                                        <label id="closeListADHD" class="form-check-label" for="tab2_radio23">No</label>
                                    </div>
                                    <div class="form-check ">
                                        <input disabled class="form-check-input main_input" type="radio" name="tab2_tr6_row1"
                                            id="tab2_radio24" value="yes">
                                        <label id="openListADHD" class="form-check-label" for="tab2_radio24">Yes</label>
                                    </div>
                                    <div class="adhd_yes_condition">
                                        <div class="form-check ">
                                            <input disabled class="form-check-input" type="checkbox"
                                                name="tab2_tr6_row3" id="tab2_radio25" value="yes" disabled>
                                            <label class="form-check-label" for="tab2_radio25">314.01 ADHD - Combined
                                                presentation
                                                type</label>
                                        </div>
                                        <div class="form-check ">
                                            <input disabled class="form-check-input" type="checkbox"
                                                name="tab2_tr6_row4" id="tab2_radio26" value="yes" disabled>
                                            <label class="form-check-label" for="tab2_radio26"> 314.00 ADHD - Predominantly
                                                inattentive presentation type</label>
                                        </div>
                                        <div class="form-check ">
                                            <input disabled class="form-check-input" type="checkbox"
                                                name="tab2_tr6_row5" id="tab2_radio27" value="yes" disabled>
                                            <label class="form-check-label" for="tab2_radio27">314.01 ADHD - Predominantly
                                                hyperactive-impulsive presentation type</label>
                                        </div>
                                        <div class="form-check ">
                                            <input class="form-check-input main_input" type="checkbox"
                                                name="tab2_tr6_row6" id="tab2_radio28" value="yes">
                                            <label class="form-check-label" for="tab2_radio28">314.01 ADHD - Other specified
                                                attention-deficit/hyperactivity disorder</label>
                                        </div>
                                        <div class="form-check ">
                                            <input class="form-check-input main_input" type="checkbox"
                                                name="tab2_tr6_row7" id="tab2_radio29" value="yes">
                                            <label class="form-check-label" for="tab2_radio29">314.01 ADHD - Not specified
                                                attention-deficit/hyperactivity disorder</label>
                                        </div>
                                        <div class="form-check ">
                                            <input class="form-check-input main_input" type="checkbox"
                                                name="tab2_tr6_row8" id="tab2_radio30" value="yes">
                                            <label class="form-check-label" for="tab2_radio30">Partly in
                                                remission</label>
                                        </div>
                                    </div>




                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Severity</td>
                                <td>
                                    <div class="form-check severity_check ">
                                        <input class="form-check-input" type="radio" name="severite_level"
                                            id="tab2_radio31" value="mild">
                                        <label class="form-check-label" for="tab2_radio31">mild</label>
                                    </div>
                                    <div class="form-check  severity_check">
                                        <input class="form-check-input" type="radio" name="severite_level"
                                            id="tab2_radio32" value="moderate">
                                        <label class="form-check-label" for="tab2_radio32">moderate</label>
                                    </div>
                                    <div class="form-check severity_check">
                                        <input class="form-check-input" type="radio" name="severite_level"
                                            id="tab2_radio33" value="severe">
                                        <label class="form-check-label" for="tab2_radio33">severe</label>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="wrap_for_remarks col-12"> <span class=" remark"> * Indicate from whom the collateral
                            information
                            was taken.<br>
                            ** If the established presentation types differ in childhood and adulthood, the current
                            adult
                            presentation type prevails for the
                            diagnosis.</span>

                    </div>
                    <div class="comments col-12">
                        <span>Comments:</span>
                        <textarea name="additonal" rows="5"></textarea>
                    </div>
                    <div class="print_wrap col-12"><input type="submit" value="Send" class="btn" id="postDataBtn"></div> 
                </div>
              
                </form>

            </div>
        <div class="print_wrap col-12">
        <!-- <button class="btn" id='btnPrint' value="Print Div" >Save/print</button> -->
       
      
        </div>
        </div>
        <div class=" sidebar" id="sidebar">
            <div class="sidebar__inner" id="sidebar__inner">
                <div class="content_part">
                    <h3 class="table_of_contents">Table of contents</h3>
                    <ul class="main_list">
                        <li class=""><a class="" href="#startPage">Start</a></li>
                        <li class="show_dropdown">Part 1</li>

                        <ul class="custom_dropdown sub_list">
                            <li><a class="custom-dropdown-item" href="#startA1">A 1</a></li>
                            <li><a class="custom-dropdown-item" href="#startA2">A 2</a></li>
                            <li><a class="custom-dropdown-item" href="#startA3">A 3</a></li>
                            <li><a class="custom-dropdown-item" href="#startA4">A 4</a></li>
                            <li><a class="custom-dropdown-item" href="#startA5">A 5</a></li>
                            <li><a class="custom-dropdown-item" href="#startA6">A 6</a></li>
                            <li><a class="custom-dropdown-item" href="#startA7">A 7</a></li>
                            <li><a class="custom-dropdown-item" href="#startA8">A 8</a></li>
                            <li><a class="custom-dropdown-item" href="#startA9">A 9</a></li>
                        </ul>

                        <li class="show_dropdown">Part 2 </li>

                        <ul class="custom_dropdown sub_list">
                            <li><a class="custom-dropdown-item" href="#startH1">H/I 1</a></li>
                            <li><a class="custom-dropdown-item" href="#startH2">H/I 2</a></li>
                            <li><a class="custom-dropdown-item" href="#startH3">H/I 3</a></li>
                            <li><a class="custom-dropdown-item" href="#startH4">H/I 4</a></li>
                            <li><a class="custom-dropdown-item" href="#startH5">H/I 5</a></li>
                            <li><a class="custom-dropdown-item" href="#startH6">H/I 6</a></li>
                            <li><a class="custom-dropdown-item" href="#startH7">H/I 7</a></li>
                            <li><a class="custom-dropdown-item" href="#startH8">H/I 8</a></li>
                            <li><a class="custom-dropdown-item" href="#startH9">H/I 9</a></li>
                        </ul>

                        <li class="show_dropdown">Part 3 </li>

                        <ul class="custom_dropdown sub_list">
                            <li><a class="custom-dropdown-item" href="#startCriterionB">Criterion B</a></li>
                            <li><a class="custom-dropdown-item" href="#startCriterionC">Criterion C</a></li>
                            <li><a class="custom-dropdown-item" href="#startC1">C1</a></li>
                            <li><a class="custom-dropdown-item" href="#startC2">C2</a></li>
                            <li><a class="custom-dropdown-item" href="#startC3">C3</a></li>
                            <li><a class="custom-dropdown-item" href="#startC4">C4</a></li>
                            <li><a class="custom-dropdown-item" href="#startC5">C5</a></li>

                        </ul>

                        <li><a class="" href="#summary_table">Summary table</a></li>
                        <li><a class="" href="#table2_1">Score form</a></li>





                    </ul>
                </div>
                <div class="arrow_part"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 384.97 384.97"
                        style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve">
                        <g>
                            <g id="Chevron_Left_Circle">
                                <path d="M192.485,0C86.185,0,0,86.185,0,192.485C0,298.797,86.173,384.97,192.485,384.97S384.97,298.797,384.97,192.485
			C384.97,86.185,298.797,0,192.485,0z M192.485,361.282c-92.874,0-168.424-75.923-168.424-168.797S99.611,24.061,192.485,24.061
			s168.424,75.55,168.424,168.424S285.359,361.282,192.485,361.282z" />
                                <path d="M235.878,99.876c-4.704-4.74-12.319-4.74-17.011,0l-83.009,84.2c-4.572,4.62-4.584,12.56,0,17.191l82.997,84.2
			c4.704,4.74,12.319,4.74,17.011,0c4.704-4.752,4.704-12.439,0-17.191l-74.528-75.61l74.54-75.61
			C240.57,112.315,240.57,104.628,235.878,99.876z" />
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>


    </div>
    <div class="overlay_for_alert_popup" style="display:none;"></div>
<div class="popup_for_alert" style="display:none;">
    <div class="close_popup"> <svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 301.076 301.076" style="enable-background:new 0 0 301.076 301.076;" xml:space="preserve">
<g>
	<path style="fill:#010002;" d="M98.159,150.539L10.858,237.84c-14.461,14.469-14.461,37.936,0,52.397
		c14.453,14.453,37.92,14.453,52.372,0l87.309-87.317l87.293,87.317c14.469,14.453,37.92,14.453,52.381,0
		c14.477-14.469,14.461-37.936,0-52.397l-87.293-87.301l87.301-87.285c14.469-14.477,14.469-37.936,0-52.397
		c-14.469-14.477-37.92-14.477-52.389,0l-87.293,87.309L63.23,10.858c-14.453-14.477-37.92-14.477-52.381,0
		c-14.461,14.461-14.461,37.895,0,52.364L98.159,150.539z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
 </div>
    <div class="main_message_wrap"><h2 id="mainMessage"></h2></div>
    <div class="second_message_wrap"><span id="secondMessage"></span></div>
    <a href="" class="download_file" download id="linkToSaveFile">Download .docx file</a>
    <a href="" class="download_file" download id="linkToSaveTxtFile">Download .txt file</a>
</div>
</body>

</html>