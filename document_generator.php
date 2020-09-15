<?php 
require_once 'vendor/autoload.php';
include_once 'Sample_Header.php';
// use PhpOffice\PhpWord\Style\TablePosition;
use PhpOffice\PhpWord\Shared\Converter;

$current_date = date("d-m-Y");
$psychologist_name = $_POST['psychologist_name'];
$patient_name = $_POST['patient_name'];
$patient_bday = $_POST['patient_birthday'];
$array_keys = array_keys($_POST);
$array_values = array_values($_POST);

//объявляю массивы, которые будут содержать положительные и отрицательные ответы для разных частей теста

$positiveAnswersAdultA = array();
$positiveAnswersChildA = array();
$negativeAnswersAdultA = array();
$negativeAnswersChildA = array();

$positiveAnswersAdultH = array();
$positiveAnswersChildH = array();
$negativeAnswersAdultH = array();
$negativeAnswersChildH = array();

$positiveAnswersAdultC = array();
$positiveAnswersChildC = array();
$negativeAnswersAdultC = array();
$negativeAnswersChildC = array();
//подмассивы -- это массивы из части A,H,C, в которые входят инпуты из конкретной подчасти (например) C -- с1, с2, с3, с4, с5. Сами инпуты у меня имеют имена типа p3c1_i1, что расшифровывается как Part 3, Subpart C1, input 1. Всего у меня 10 блоков для инпутов (5 для adult и 5 для child), поэтому не удивляйтесь именам типа p3c9_i1. с9 здесь означает adult для подчасти c5. Но такие имена только у инпутов в части С, в остальных частях в названии инпута присутствует adult или child.
$subArrayA1Adult = array(); 
$subArrayA2Adult = array();
$subArrayA3Adult = array();
$subArrayA4Adult = array();
$subArrayA5Adult = array();
$subArrayA6Adult = array();
$subArrayA7Adult = array();
$subArrayA8Adult = array();
$subArrayA9Adult = array();
$subArrayA1Child = array(); 
$subArrayA2Child = array();
$subArrayA3Child = array();
$subArrayA4Child = array();
$subArrayA5Child = array();
$subArrayA6Child = array();
$subArrayA7Child = array();
$subArrayA8Child = array();
$subArrayA9Child = array();

$subArrayH1Adult = array(); 
$subArrayH2Adult = array();
$subArrayH3Adult = array();
$subArrayH4Adult = array();
$subArrayH5Adult = array();
$subArrayH6Adult = array();
$subArrayH7Adult = array();
$subArrayH8Adult = array();
$subArrayH9Adult = array();
$subArrayH1Child = array(); 
$subArrayH2Child = array();
$subArrayH3Child = array();
$subArrayH4Child = array();
$subArrayH5Child = array();
$subArrayH6Child = array();
$subArrayH7Child = array();
$subArrayH8Child = array();
$subArrayH9Child = array();

$subArrayC1Adult = array(); 
$subArrayC2Adult = array();
$subArrayC3Adult = array();
$subArrayC4Adult = array();
$subArrayC5Adult = array();

$subArrayC1Child = array(); 
$subArrayC2Child = array();
$subArrayC3Child = array();
$subArrayC4Child = array();
$subArrayC5Child = array();

$subArrayC1 = array(); 
$subArrayC2 = array();
$subArrayC3 = array();
$subArrayC4 = array();
$subArrayC5 = array();
if(!empty($_POST['additonal'])):
$docx_additional = htmlspecialchars($_POST['additonal'], ENT_QUOTES); //экранирую возможный знак амперсанда
$txt_additional = $_POST['additonal'].';'; //для .txt нужен другой код амперсанда - с точкой-запятой на конце
endif;
//собираю ключи и значения из массива ПОСТ, добавляю их в один массив, перебираю его и получаю разные массивы для Part 1 Part 2 Part 3
$array_combine = array_combine($array_keys, $array_values);
foreach($array_combine as $key => $value){
    if(strpos($key, 'a1') !== false 
    || strpos($key, 'a2') !== false 
    ||strpos($key, 'a3') !== false 
    ||strpos($key, 'a4') !== false 
    ||strpos($key, 'a5') !== false 
    ||strpos($key, 'a6') !== false 
    ||strpos($key, 'a7') !== false 
    ||strpos($key, 'a8') !== false 
    ||strpos($key, 'a9') !== false
    ){
        $partA[$key] = $value;
    }
    if(strpos($key, 'h1') !== false 
    || strpos($key, 'h2') !== false 
    ||strpos($key, 'h3') !== false 
    ||strpos($key, 'h4') !== false 
    ||strpos($key, 'h5') !== false 
    ||strpos($key, 'h6') !== false 
    ||strpos($key, 'h7') !== false 
    ||strpos($key, 'h8') !== false 
    ||strpos($key, 'h9') !== false
    ){
        $partH[$key] = $value;
    }
    if(strpos($key, 'c1') !== false 
    || strpos($key, 'c2') !== false 
    ||strpos($key, 'c3') !== false 
    ||strpos($key, 'c4') !== false 
    ||strpos($key, 'c5') !== false 
    ||strpos($key, 'c6') !== false 
    ||strpos($key, 'c7') !== false 
    ||strpos($key, 'c8') !== false 
    ||strpos($key, 'c9') !== false 
    ||strpos($key, 'c10') !== false 
    
    ){
        $partC[$key] = $value;
    }
   
}


//раскладываю пришедшие из формы данные по массивам, чтобы потом легче было работать
foreach($partA as $question => $answer){
    if(strpos($question, 'Adult') !== false )
    {
       $adultAnswersA[]= $answer; 
    if($answer == 'yes'){
        $positiveAnswersAdultA[] = $answer;
    }
    elseif($answer == 'no'){
        $negativeAnswersAdultA[] = $answer;
    }
}
elseif(strpos($question, 'Child' ) !==false){
     $childAnswersA[] = $answer;
    if($answer == 'yes'){
        $positiveAnswersChildA[] = $answer;
    }
    elseif($answer == 'no'){
        $negativeAnswersChildA[] = $answer;
    }

}
//собираю отдельно подмассивы из части А для адалт и чаилд, чтобы вывести в файле .txt
elseif(strpos($question, 'p1a1_adult') !== false){
    $subArrayA1Adult[$question] = $answer;
}
elseif(strpos($question, 'p1a2_adult') !== false){
    $subArrayA2Adult[$question] = $answer;
}
elseif(strpos($question, 'p1a3_adult') !== false){
    $subArrayA3Adult[$question] = $answer;
}
elseif(strpos($question, 'p1a4_adult') !== false){
    $subArrayA4Adult[$question] = $answer;
}
elseif(strpos($question, 'p1a5_adult') !== false){
    $subArrayA5Adult[$question] = $answer;
}
elseif(strpos($question, 'p1a6_adult') !== false){
    $subArrayA6Adult[$question] = $answer;
}
elseif(strpos($question, 'p1a7_adult') !== false){
    $subArrayA7Adult[$question] = $answer;
}
elseif(strpos($question, 'p1a8_adult') !== false){
    $subArrayA8Adult[$question] = $answer;
}
elseif(strpos($question, 'p1a9_adult') !== false){
    $subArrayA9Adult[$question] = $answer;
}
elseif(strpos($question, 'p1a1_child') !== false){
    $subArrayA1Child[$question] = $answer;
}
elseif(strpos($question, 'p1a2_child') !== false){
    $subArrayA2Child[$question] = $answer;
}
elseif(strpos($question, 'p1a3_child') !== false){
    $subArrayA3Child[$question] = $answer;
}
elseif(strpos($question, 'p1a4_child') !== false){
    $subArrayA4Child[$question] = $answer;
}
elseif(strpos($question, 'p1a5_child') !== false){
    $subArrayA5Child[$question] = $answer;
}
elseif(strpos($question, 'p1a6_child') !== false){
    $subArrayA6Child[$question] = $answer;
}
elseif(strpos($question, 'p1a7_child') !== false){
    $subArrayA7Child[$question] = $answer;
}
elseif(strpos($question, 'p1a8_child') !== false){
    $subArrayA8Child[$question] = $answer;
}
elseif(strpos($question, 'p1a9_child') !== false){
    $subArrayA9Child[$question] = $answer;
}

}
foreach($partH as $question => $answer){
    if(strpos($question, 'Adult') !== false ){
        $adultAnswersH[]= $answer; 
    if($answer == 'yes'){
        $positiveAnswersAdultH[] = $answer;
    }
    elseif($answer == 'no'){
        $negativeAnswersAdultH[] = $answer;
    }
}
elseif(strpos($question, 'Child' ) !==false){
    $childAnswersH[]= $answer; 
    if($answer == 'yes'){
        $positiveAnswersChildH[] = $answer;
    }
    elseif($answer == 'no'){
        $negativeAnswersChildH[] = $answer;
    }

}
//собираю отдельно подмассивы из части H/I для адалт и чаилд, чтобы вывести в файле .txt
elseif(strpos($question, 'p2h1_adult') !== false){
    $subArrayH1Adult[$question] = $answer;
}
elseif(strpos($question, 'p2h2_adult') !== false){
    $subArrayH2Adult[$question] = $answer;
}
elseif(strpos($question, 'p2h3_adult') !== false){
    $subArrayH3Adult[$question] = $answer;
}
elseif(strpos($question, 'p2h4_adult') !== false){
    $subArrayH4Adult[$question] = $answer;
}
elseif(strpos($question, 'p2h5_adult') !== false){
    $subArrayH5Adult[$question] = $answer;
}
elseif(strpos($question, 'p2h6_adult') !== false){
    $subArrayH6Adult[$question] = $answer;
}
elseif(strpos($question, 'p2h7_adult') !== false){
    $subArrayH7Adult[$question] = $answer;
}
elseif(strpos($question, 'p2h8_adult') !== false){
    $subArrayH8Adult[$question] = $answer;
}
elseif(strpos($question, 'p2h9_adult') !== false){
    $subArrayH9Adult[$question] = $answer;
}
elseif(strpos($question, 'p2h1_child') !== false){
    $subArrayH1Child[$question] = $answer;
}
elseif(strpos($question, 'p2h2_child') !== false){
    $subArrayH2Child[$question] = $answer;
}
elseif(strpos($question, 'p2h3_child') !== false){
    $subArrayH3Child[$question] = $answer;
}
elseif(strpos($question, 'p2h4_child') !== false){
    $subArrayH4Child[$question] = $answer;
}
elseif(strpos($question, 'p2h5_child') !== false){
    $subArrayH5Child[$question] = $answer;
}
elseif(strpos($question, 'p2h6_child') !== false){
    $subArrayH6Child[$question] = $answer;
}
elseif(strpos($question, 'p2h7_child') !== false){
    $subArrayH7Child[$question] = $answer;
}
elseif(strpos($question, 'p2h8_child') !== false){
    $subArrayH8Child[$question] = $answer;
}
elseif(strpos($question, 'p2h9_child') !== false){
    $subArrayH9Child[$question] = $answer;
}
}

foreach($partC as $question => $answer){
    if(strpos($question, 'Adult') !== false ){
        $adultAnswersC[]= $answer; 
    if($answer == 'yes'){
        $positiveAnswersAdultC[] = $answer;
    }
    elseif($answer == 'no'){
        $negativeAnswersAdultC[] = $answer;
    }
}
elseif(strpos($question, 'Child' ) !==false){
    $childAnswersC[]= $answer; 
    if($answer == 'yes'){
        $positiveAnswersChildC[] = $answer;
    }
    elseif($answer == 'no'){
        $negativeAnswersChildC[] = $answer;
    }

}
elseif(strpos($question, 'p3c10') !== false){
    $subArrayC5Child[$question] = $answer;
}
elseif(strpos($question, 'p3c1') !== false){
    $subArrayC1Adult[$question] = $answer;
    if($answer == 'yes'){
    $subArrayC1[] = $question;
    }

}
elseif(strpos($question, 'p3c3') !== false){
    $subArrayC2Adult[$question] = $answer;
    if($answer == 'yes'){
        $subArrayC2[] = $question;
        }
}
elseif(strpos($question, 'p3c5') !== false){
    $subArrayC3Adult[$question] = $answer;
    if($answer == 'yes'){
        $subArrayC3[] = $question;
        }

}
elseif(strpos($question, 'p3c7') !== false){
    $subArrayC4Adult[$question] = $answer;
    if($answer == 'yes'){
        $subArrayC4[] = $question;
        }

}
elseif(strpos($question, 'p3c9') !== false){
    $subArrayC5Adult[$question] = $answer;
    if($answer == 'yes'){
        $subArrayC5[] = $question;
        }

}
elseif(strpos($question, 'p3c2') !== false){
    $subArrayC1Child[$question] = $answer;
}
elseif(strpos($question, 'p3c4') !== false){
    $subArrayC2Child[$question] = $answer;
}
elseif(strpos($question, 'p3c6') !== false){
    $subArrayC3Child[$question] = $answer;
}
elseif(strpos($question, 'p3c8') !== false){
    $subArrayC4Child[$question] = $answer;
}


}

//начало документа .docx
$style_for_header =array('bold' => true, 'align' => 'both');
$headerStyle = array('align' => 'center');
$pStyle = array();

$phpWord = new \PhpOffice\PhpWord\PhpWord();
$phpWord->setDefaultParagraphStyle(
    array(
    //'alignment' => \PhpOffice\PhpWord\SimpleType\Jc::LEFT,
    'spaceAfter' => \PhpOffice\PhpWord\Shared\Converter::pointToTwip(0),
    'spacing' => 120,
    'lineHeight' => 1
  
    )
    );
    $phpWord->getSettings()->setAutoHyphenation(true);

$phpWord->setDefaultFontName('Arial');
$phpWord->setDefaultFontSize(11) ;
$section = $phpWord->addSection(array('colsNum'=> '2', 'breakType' => 'continuous', 'colsSpace' => 0));
// $section->getStyle()->setBreakType('continuous');
// $section->getStyle()->setColsNum(2);
$section->addText('Consulting Rooms:', $style_for_header);
$section->addText('Harley Psychiatrists,');
$section->addText('Lower Ground Floor,');
$section->addText('23 Harley Street,');
$section->addText('London W1G 9QN');
$section->addTextBreak(1);
$section->addText('Date: '.$current_date);
// $section->getStyle()->setBreakType('nextColumn');
 $section->addImage('logo.png', array('alignment' => 'end', 'width'=> 75,
 'height'=> 75));
$section->addText('Phone: 020 8158 6650','',array('alignment' => 'right'));
$section->addText('Email: admin@harleypsychiatrists.co.uk', '', array('alignment'=> 'right'));
$section->addTextBreak(1);
$section = $phpWord->addSection(array('breakType' => 'continuous'));
//$section->getStyle()->setBreakType('continuous');
$section->addText('ADHD assessment' , array('size' => 20) , array('bold' => true ));
$section->addText('Assessment Date/Time: '.date("d-m-Y H:i:s"));
$section->addText('Psychologist’s Name: '.$psychologist_name);
$section->addText('Client name: '.$patient_name);
$section->addText('Client DOB: '.$patient_bday);
$section->addText('Client Address: ');
$section->addTextBreak(1);
$section->addText('Outline', array('bold' => true,'size'=>12,'alignment' => 'start')  , array(''));

$section->addText('This Adult ADHD assessment is based on a clinical/structured expanded interview, conducted according to the guidelines set out by the National Institute for Health and Care Excellence, the Royal College of Psychiatrists, and the World Health Organisation. It includes the “gold standard” approved Rating Scales, such as DIVA-5 and Conners, and uses strict criteria as per DSM-5.',array(),array('alignment'=>'both'));

$section->addText('The assessment incorporates, inter alia, valuable information from the professional interview, information provided by the patient about themselves, and where applicable it also includes an
observer’s input, as well as various other collaborative tools.', array(), array('alignment' => 'both'));

$section->addText('The report contributes towards considering:');
$section->addListItem("  A diagnosis of ADHD", 0, null, array('alignment' => 'both'));
$section->addListItem("  A diagnosis of related problems.", 0, null, array('alignment' => 'both'));
$section->addListItem("  Evaluating the treatment plan options", 0, null, array('alignment' => 'both'));
$section->addTextBreak(1);
$section->addText("This report provides information about the patient’s scores, significance of specific symptoms in relation to accepted diagnostic thresholds, and summarises the interpretation of the main subscales as compared to diagnostic criteria.", array(),array('alignment' => 'both'));
$section->addTextBreak(1);
$section->addText("The report is based on the individual's current functioning, incorporates the neurodevelopmental data, and includes the (childhood) onset of symptoms, as required for diagnosis by the leading authorities. ", array(), array('alignment' => 'both'));
$section = $phpWord->addSection();
$section->addText('Neurodevelopment and Patient History',array('size'=>12,'bold' => true, 'alignment'=>'center'),'');
$section->addTextBreak(1);
$section->addText('DSM-5 Standards',array('bold'=>true, 'size'=>12, 'alignment'=> 'left'), '');
$phpWord->setDefaultParagraphStyle(
    array(
    'alignment' => 'both',
   
  
    )
    );
$section->addText('These results are based on the Diagnostic Interview for ADHD in Adults (DIVA-5), and confirmed by other components of the current assessment.',array(),array('alignment' => 'both'));

$phpWord->addNumberingStyle(
    'multilevel',
    array(
        'type' => 'multilevel',
        'levels' => array(
            array('format' => 'decimal', 'text' => '%1.', 'left' => 360, 'hanging' => 360, 'tabPos' => 360, 'alignment' => 'both'),
            array('format' => 'upperLetter', 'text' => '%2.', 'left' => 720, 'hanging' => 360, 'tabPos' => 720, 'alignment' => 'both'),
        )
    )
);
$section->addListItem('Criterion A (ADHD symptoms):', 0, null, 'multilevel');

if($_POST['tab2_tr1_childhood'] == 'no'){
    $section->addListItem('The assessment confirmed that fewer than 3 symptoms of Attention Deficit and/or Hyperactivity/Impulsivity were present in childhood.', 1, null, 'multilevel');
}
elseif($_POST['tab2_tr1_childhood']=='yes'){
    
    $section->addListItem('The assessment confirmed that 3 or more symptoms of Attention Deficit and/or Hyperactivity/Impulsivity were present in childhood.', 1, null, 'multilevel');
}
else{
    $section->addListItem('No data.', 1, null, 'multilevel');
}
if($_POST['tab2_tr1_adulthood_a'] == 'no'){
    $section->addListItem('There were fewer than 5 characteristics of Attention Deficit found in adulthood.', 1, null, 'multilevel');

}
elseif($_POST['tab2_tr1_adulthood_a'] == 'yes'){
    $section->addListItem('There were 5 or more characteristics of Attention Deficit found in adulthood.', 1, null, 'multilevel');
}
else{
    $section->addListItem('No data.', 1, null, 'multilevel');
}
if($_POST['tab2_tr1_adulthood_h'] == 'no'){
    $section->addListItem('There fewer than 5 characteristics of Hyperactivity/Impulsivity found in adulthood.', 1, null, 'multilevel');
}

elseif($_POST['tab2_tr1_adulthood_h'] == 'yes'){
    $section->addListItem('There were 5 or more characteristics of Hyperactivity/Impulsivity found in adulthood.', 1, null, 'multilevel');
}
else{
    $section->addListItem('No data.', 1, null, 'multilevel');
}
if($_POST['tab2_tr2'] == 'no'){
    $section->addListItem('Criterion B (age of onset): There are no signs of a lifelong pattern of symptoms (starting before the 12th year of age)', 0, null, 'multilevel');
}
elseif($_POST['tab2_tr2'] == 'yes'){
    $section->addListItem('Criterion B (age of onset): There are signs of a lifelong pattern of symptoms (starting before the 12th year of age)', 0, null, 'multilevel');
}
else{
    $section->addListItem('No data.', 0, null, 'multilevel');
}
if(count($positiveAnswersAdultC )>1 && count($positiveAnswersChildC) >1){
    $section->addListItem('Criterion C (pervasiveness) and D (impairment): The symptoms and the impairment are expressed in at least two domains of functioning, both in adulthood and childhood', 0, null, 'multilevel');
}
else{
    $section->addListItem('Criterion C (pervasiveness) and D (impairment): The symptoms and the impairment are not expressed in at least two domains of functioning, both in adulthood and childhood', 0, null, 'multilevel');
}
if($_POST['tab2_tr4'] == 'no'){
    $section->addListItem('Criterion E (exclusionary conditions): During the course of the assessment, the symptoms could be better explained by the presence of another psychiatric disorder', 0, null, 'multilevel');
}
elseif($_POST['tab2_tr4'] == 'yes'){
    $section->addListItem('Criterion E (exclusionary conditions): During the course of the assessment, the symptoms could not be better explained by the presence of another psychiatric disorder', 0, null, 'multilevel');
}
else{
    $section->addListItem('No data.', 0, null, 'multilevel');
}
$phpWord->setDefaultParagraphStyle(
    array(
    'alignment' => 'left',
   
  
    )
    );
$section = $phpWord->addSection();
$section->addText('Summary of A1 and A2 symptoms', array( 'bold' => true , 'size' => 12), array( 'align' => 'center'));
$phpWord->setDefaultFontName('Tahoma');

$fancyTableStyleName = 'Summary of A1 and A2 symptoms';
$fancyTableStyle = array('borderSize' => 15 , 'cellMargin' => 40);
$fancyTableFirstRowStyle = array();
$fancyTableCellStyle = array('bgColor' => '3B3477');

$fancyTableFontStyle = array('bold' => true, 'color'=>'FFFFFF', 'size' => 10);
$phpWord->addTableStyle($fancyTableStyleName, $fancyTableStyle, $fancyTableFirstRowStyle);
 $section->addText('The following table shows a summary of the DSM-5 criterions and presence during adulthood and childhood as found by DIVA, split by Attention Deficit and Hyperactivity/Impulsivity symptoms:');

$section->addTextBreak(1);
$table = $section->addTable($fancyTableStyleName);
$table->addRow(300, array('tblHeader' => true));
$table->addCell(700, $fancyTableCellStyle)->addText('Criterion', $fancyTableFontStyle, array());
$table->addCell(8500, $fancyTableCellStyle)->addText('Symptom', $fancyTableFontStyle, array());
$table->addCell(400, $fancyTableCellStyle)->addText('Adult', $fancyTableFontStyle, array());
$table->addCell(400, $fancyTableCellStyle)->addText('Child', $fancyTableFontStyle, array());
$style_for_casual_row = array('bgColor' => 'B9E5FA', 'valign' => 'center');
$style_for_casual_text_row = array('size'=>10);
$style_for_first_column_text = array('bold' => true, 'color' => '000000', 'valign' => 'center', 'size' => 10);
$style_for_result_row = array('bgColor'=>'00B6F0', 'lineheight' => 1.5,  'align' => 'center' , 'valign' => 'center');
$style_for_text_result_row = array('bold' => true, 'size' => 10);
$style_for_text_result_numericks = array('bold' => true,  'align' => 'center', 'valign' => 'center', 'size' => 10);
$style_for_images =array(
    'width'         => 15,
    'height'        => 15,
    'marginTop'     => -1,
    'marginLeft'    => -1,
    'alignment'     => 'center',
    
    
);
$style_for_images2 =array(
    'width'         => 10,
    'height'        => 10,
    'marginTop'     => -1,
    'marginLeft'    => -1,
    'alignment'     => 'center'
    
);
$imgPositiveUrl = 'checked.png';
$imgNegativeUrl = 'escape.png';

$alphabet = array('a','b','c','d','e','f','g','h','i'); //массив для первого столбца таблицы 
$symptomesA = array('A1. Often fails to give close attention to details, or makes careless mistakes in schoolwork, work or during other activities', 'A2. Often has difficultly sustaining attention in tasks or play activities', 'A3. Often does not seem to listen when spoken to directly', 'A4. Often does not follow through on instructions and fails to finish schoolwork, chores, or duties in the workplace', 'A5. Often has difficulty organizing tasks and activities' , 'A6. Often avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort', 'A7. Often loses things necessary for tasks or activities', 'A8. Often easily distracted by extraneous stimuli', 'A9. Often forgetful in daily activities'); //массив с симптомами части А
$symptomesH = array('H/I 1. Often fidgets with or taps hands or feet or squirms in seat','H/I 2. Often leaves seat in situations when remaining seated is expected', 'H/I 3. Often runs about or climbs in situations where it is inappropriate' , 'H/I 4. Often unable to play or take part in leisure activities quietly', 'H/I 5. Is often “on the go” acting as if “driven by a motor”', 'H/I 6. Often talks excessively', 'H/I 7. Often blurts out an answer before a question has been completed', 'H/I 8. Often has difficulty awaiting his or her turn', 'H/I 9. Often interrupts or intrudes on others'); //массив с симптомами части H




$count_of_positive_adult_answers_A = count($positiveAnswersAdultA);
$count_of_negative_adult_answers_A = count($negativeAnswersAdultA);
$count_of_positive_child_answers_A = count($positiveAnswersChildA);
$count_of_negative_child_answers_A = count($negativeAnswersChildA);

$count_of_positive_adult_answers_H = count($positiveAnswersAdultH);
$count_of_negative_adult_answers_H = count($negativeAnswersAdultH);
$count_of_positive_child_answers_H = count($positiveAnswersChildH);
$count_of_negative_child_answers_H = count($negativeAnswersChildH);

$count_of_positive_adult_answers_C = count($positiveAnswersAdultC);
$count_of_negative_adult_answers_C = count($negativeAnswersAdultC);
$count_of_positive_child_answers_C = count($positiveAnswersChildC);
$count_of_negative_child_answers_C = count($negativeAnswersChildC);
for ($i = 0; $i < 9; $i++) {
    $table->addRow($height = 300 ,array('cantSplit' => true) );
    $table->addCell(700,  $style_for_casual_row)->addText('A1'.$alphabet[$i], $style_for_first_column_text);
    $table->addCell(8500,  $style_for_casual_row)->addText($symptomesA[$i], $style_for_casual_text_row);
    if($adultAnswersA[$i] == 'yes'){
       $imgUrl = $imgPositiveUrl;
       $table->addCell(400 , $style_for_casual_row) ->addImage($imgUrl, $style_for_images);
    }
    elseif($adultAnswersA[$i] == 'no'){
        $imgUrl = $imgNegativeUrl;
        $table->addCell(400 , $style_for_casual_row) ->addImage($imgUrl, $style_for_images2);
    }
    else{
        $table->addCell(400,  $style_for_casual_row) ->addText('');
    }
    if($childAnswersA[$i] == 'yes'){
        $imgUrl = $imgPositiveUrl;
        $table->addCell(400 , $style_for_casual_row) ->addImage($imgUrl, $style_for_images);
     }
     elseif($childAnswersA[$i] == 'no'){
         $imgUrl = $imgNegativeUrl;
         $table->addCell(400 , $style_for_casual_row) ->addImage($imgUrl, $style_for_images2);
     }
     else{
         $table->addCell(400,  $style_for_casual_row) ->addText('');
     }
    // $table->addCell(1000 , $style_for_casual_row) ->addImage($imgUrl, $style_for_images);
    //$table->addCell(1000,  $style_for_casual_row) ->addText('are');
    
}

$table->addRow($height = 300);
$table->addCell(700, $style_for_result_row)->addText("", $style_for_text_result_row);
$table->addCell(8500, $style_for_result_row)->addText("Total number of criteria Attention Deficit", $style_for_text_result_row);
$table->addCell(400, $style_for_result_row)->addText($count_of_positive_adult_answers_A."/9", array('alignment' => 'center', 'bold' => true,'size'=>10) , $style_for_text_result_numericks);
$table->addCell(400, $style_for_result_row)->addText($count_of_positive_child_answers_A."/9", array('alignment' => 'center', 'bold' => true,'size'=>10, 'valign' => 'center') ,$style_for_text_result_numericks);
for ($i = 0; $i < 9; $i++) {
    $table->addRow($height = 300 ,array('cantSplit' => true));
    $table->addCell(700,  $style_for_casual_row)->addText('A2'.$alphabet[$i], $style_for_first_column_text);
    $table->addCell(8500,  $style_for_casual_row)->addText($symptomesH[$i], $style_for_casual_text_row);
    if($adultAnswersH[$i] == 'yes'){
        $imgUrl = $imgPositiveUrl;
        $table->addCell(400 , $style_for_casual_row) ->addImage($imgUrl, $style_for_images);
     }
     elseif($adultAnswersH[$i] == 'no'){
         $imgUrl = $imgNegativeUrl;
         $table->addCell(400 , $style_for_casual_row) ->addImage($imgUrl, $style_for_images2);
     }
     else{
         $table->addCell(400,  $style_for_casual_row) ->addText('');
     }
     if($childAnswersH[$i] == 'yes'){
         $imgUrl = $imgPositiveUrl;
         $table->addCell(400 , $style_for_casual_row) ->addImage($imgUrl, $style_for_images);
      }
      elseif($childAnswersH[$i] == 'no'){
          $imgUrl = $imgNegativeUrl;
          $table->addCell(400 , $style_for_casual_row) ->addImage($imgUrl, $style_for_images2);
      }
      else{
          $table->addCell(400,  $style_for_casual_row) ->addText('');
      }
   // $table->addCell(1000,  $style_for_casual_row) ->addText('are');
    //$table->addCell(1000,  $style_for_casual_row) ->addText('are');
    
    
}
$table->addRow($height = 300);
$table->addCell(700, $style_for_result_row)->addText("", array('alignment' => 'center'),$style_for_text_result_row);
$table->addCell(8500, $style_for_result_row)->addText("Total number of criteria Hyperactivity/Impulsivity", $style_for_text_result_row);
$table->addCell(400, $style_for_result_row)->addText($count_of_positive_adult_answers_H."/9", array('alignment' => 'center', 'bold' => true), $style_for_text_result_numericks);
$table->addCell(400, $style_for_result_row)->addText($count_of_positive_child_answers_H."/9", array('alignment' => 'center', 
'bold' => true), $style_for_text_result_numericks);

$section->addTextBeak(1);
$section=$phpWord->addSection();
$phpWord->setDefaultFontName('Arial');
$section->addText('Absolute/Relative representation of the Main Diagnostic
criteria subscales', array('bold' => true, 'size' => 12),'');
$section->addTextBreak(1);
$phpWord->setDefaultParagraphStyle(
    array(
    'alignment' => 'both',
   
  
    )
    );
$section->addText("The following graph provides ".$patient_name."`s diagnostic indicators' comparative strength for each of the official
DSM 5 subscales and evidenced in relation to the required threshold values (in brackets where
applicable):");
$phpWord->setDefaultParagraphStyle(
    array(
    'alignment' => 'left',
   
  
    )
    );
$section->addTextBreak(1);

$section = $phpWord->addSection(array('colsNum'=> '2', 'breakType' => 'continuous', 'colsSpace' => 0));
$textrun = $section->addTextRun( array(
    //'alignment' => \PhpOffice\PhpWord\SimpleType\Jc::LEFT,
    'spaceAfter' => \PhpOffice\PhpWord\Shared\Converter::pointToTwip(0),
    'spacing' => 120,
    'lineHeight' => 1
  
    ));
 $textrun->addText('Attention Deficit in childhood');
 $textrun->addTextBreak(2); 
  $textrun->addText('Hyperactivity/Impulsivity in childhood');
  $textrun->addTextBreak(2); 
  $textrun->addText('DSM* "A", childhood subset');
  $textrun->addTextBreak(2); 
 $textrun->addText('DSM* "A", adult attention subset A1');
 $textrun->addTextBreak(2); 
 $textrun->addText('DSM* "A", adult H/I subset A2');
 $textrun->addTextBreak(2);
 $textrun->addText('DSM* "B", lifelong pattern');
 $textrun->addTextBreak(2); 
 $textrun->addText('DSM* "C" AND "D", childhood subset');
 $textrun->addTextBreak(2); 
 $textrun->addText('DSM* "C" AND "D", adult subset');
$textrun->addTextBreak(2); 
$textrun->addText('DSM* "C" AND "D", ');
$textrun->addTextBreak(2); 
$textrun->addText('DSM* "E", exclusionary conditions');
$textrun->addTextBreak(3); 
// --------------------------------------------------------------


//switch for Attention Deficit in childhood 
if(isset($count_of_positive_child_answers_A )):
switch ($count_of_positive_child_answers_A) {
    case 0:
        
        // $textrun->addImage('blue_square.png' , array('width' => 12, 'height' => 10));
        $textrun->addText(" (".$count_of_positive_child_answers_A.")");
        $textrun->addTextBreak(2); 
         break;
    case 1:
        
       $textrun->addImage('blue_square.png' , array('width' => 12, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_A.")");
       $textrun->addTextBreak(2); 
        break;
    case 2:
        
       $textrun->addImage('blue_square.png' , array('width' => 24, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_A.")");
       $textrun->addTextBreak(2); 
        break;
    case 3:
        
       $textrun->addImage('blue_square.png' , array('width' => 36, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_A.")");
       $textrun->addTextBreak(2); 
        break;
    case 4:
     
       $textrun->addImage('blue_square.png' , array('width' => 48, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_A.")");
$textrun->addTextBreak(2); 
        break;
    case 5:
       
       $textrun->addImage('blue_square.png' , array('width' => 60, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_A.")");
$textrun->addTextBreak(2); 
        break;
    case 6:
       
       $textrun->addImage('blue_square.png' , array('width' => 72, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_A.")");
$textrun->addTextBreak(2); 
        break;
    case 7:
       
       $textrun->addImage('blue_square.png' , array('width' => 84, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_A.")");
$textrun->addTextBreak(2); 
        break;
    case 8:
        
       $textrun->addImage('blue_square.png' , array('width' => 96, 'height' => 10, 'alignment' => 'center'));
       $textrun->addText(" (".$count_of_positive_child_answers_A.")");
$textrun->addTextBreak(2); 
        break;
    case 9:
       
       $textrun->addImage('blue_square.png' , array('width' => 108, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_A.")");
$textrun->addTextBreak(2); 
        break;
}
else:
    $textrun->addText("No data.");
    $textrun->addTextBreak(2); 
endif;
//switch for Hyperactivity/Impulsivity in childhood
if(isset($count_of_positive_child_answers_H)):
switch ($count_of_positive_child_answers_H) {
    case 0:
        //$textrun->addImage('blue_square.png' , array('width' => 12, 'height' => 10));
        $textrun->addText(" (".$count_of_positive_child_answers_H.")");
        $textrun->addTextBreak(2); 
         break;
    case 1:
       $textrun->addImage('blue_square.png' , array('width' => 12, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_H.")");
       $textrun->addTextBreak(2); 
        break;
    case 2:
       $textrun->addImage('blue_square.png' , array('width' => 24, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_H.")");
       $textrun->addTextBreak(2); 
        break;
    case 3:
       $textrun->addImage('blue_square.png' , array('width' => 36, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_H.")");
       $textrun->addTextBreak(2); 
        break;
    case 4:
       $textrun->addImage('blue_square.png' , array('width' => 48, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_H.")");
$textrun->addTextBreak(2); 
        break;
    case 5:
       $textrun->addImage('blue_square.png' , array('width' => 60, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_H.")");
$textrun->addTextBreak(2); 
        break;
    case 6:
       $textrun->addImage('blue_square.png' , array('width' => 72, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_H.")");
$textrun->addTextBreak(2); 
        break;
    case 7:
       $textrun->addImage('blue_square.png' , array('width' => 84, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_H.")");
$textrun->addTextBreak(2); 
        break;
    case 8:
        
        $textrun->addImage('blue_square.png' , array('width' => 96, 'height' => 10,'alignment' => 'center'));
        $textrun->addText(" (".$count_of_positive_child_answers_H.")");
        

$textrun->addTextBreak(2); 
        break;
    case 9:
       $textrun->addImage('blue_square.png' , array('width' => 108, 'height' => 10));
       $textrun->addText(" (".$count_of_positive_child_answers_H.")");
$textrun->addTextBreak(2); 
        break;
}
else:
    $textrun->addText("No data.");
    $textrun->addTextBreak(2); 
endif;

//switch for DSM* "A", childhood subset
if(isset($count_of_positive_child_answers_A)):
switch ($count_of_positive_child_answers_A) {
    case 0:
        $textrun->addImage('Treshold5/GradientBar0.jpg' , array('width' => 135, 'height' => 10));
        $textrun->addText(" ".$count_of_positive_child_answers_A." (Threshold - 5)");
        $textrun->addTextBreak(2); 
         break;
    case 1:
       $textrun->addImage('Treshold5/GradientBar1.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_child_answers_A." (Threshold - 5)");
       $textrun->addTextBreak(2); 
        break;
    case 2:
       $textrun->addImage('Treshold5/GradientBar2.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_child_answers_A." (Threshold - 5)");
       $textrun->addTextBreak(2); 
        break;
    case 3:
       $textrun->addImage('Treshold5/GradientBar3.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_child_answers_A." (Threshold - 5)");
       $textrun->addTextBreak(2); 
        break;
    case 4:
       $textrun->addImage('Treshold5/GradientBar4.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_child_answers_A." (Threshold - 5)");
        $textrun->addTextBreak(2); 
        break;
    case 5:
       $textrun->addImage('Treshold5/GradientBar5.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_child_answers_A." (Threshold - 5)");
$textrun->addTextBreak(2); 
        break;
    case 6:
       $textrun->addImage('Treshold5/GradientBar6.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_child_answers_A." (Threshold - 5)");
$textrun->addTextBreak(2); 
        break;
    case 7:
       $textrun->addImage('Treshold5/GradientBar7.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_child_answers_A." (Threshold - 5)");
$textrun->addTextBreak(2); 
        break;
    case 8:
        
        $textrun->addImage('Treshold5/GradientBar8.jpg' , array('width' => 135, 'height' => 10));
        $textrun->addText(" ".$count_of_positive_child_answers_A." (Threshold - 5)", array(),array());
        

$textrun->addTextBreak(2); 
        break;
    case 9:
       $textrun->addImage('Treshold5/GradientBar8.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_A." (Threshold - 5)",array(),array());
$textrun->addTextBreak(2); 
        break;
}
else:
    $textrun->addText("No data.");
    $textrun->addTextBreak(2); 
endif;

//switch for DSM* "A", adult attention subset A1 
if(isset($count_of_positive_adult_answers_A)):
switch ($count_of_positive_adult_answers_A) {
    case 0:
        $textrun->addImage('Treshold5/GradientBar0.jpg' , array('width' => 135, 'height' => 10));
        $textrun->addText(" ".$count_of_positive_adult_answers_A." (Threshold - 5)");
        $textrun->addTextBreak(2); 
         break;
    case 1:
       $textrun->addImage('Treshold5/GradientBar1.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_A." (Threshold - 5)");
       $textrun->addTextBreak(2); 
        break;
    case 2:
       $textrun->addImage('Treshold5/GradientBar2.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_A." (Threshold - 5)");
       $textrun->addTextBreak(2); 
        break;
    case 3:
       $textrun->addImage('Treshold5/GradientBar3.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_A." (Threshold - 5)");
       $textrun->addTextBreak(2); 
        break;
    case 4:
       $textrun->addImage('Treshold5/GradientBar4.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_A." (Threshold - 5)");
$textrun->addTextBreak(2); 
        break;
    case 5:
       $textrun->addImage('Treshold5/GradientBar5.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_A." (Threshold - 5)");
$textrun->addTextBreak(2); 
        break;
    case 6:
       $textrun->addImage('Treshold5/GradientBar6.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_A." (Threshold - 5)");
$textrun->addTextBreak(2); 
        break;
    case 7:
       $textrun->addImage('Treshold5/GradientBar7.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_A." (Threshold - 5)");
$textrun->addTextBreak(2); 
        break;
    case 8:
        
        $textrun->addImage('Treshold5/GradientBar8.jpg' , array('width' => 135, 'height' => 10));
        $textrun->addText(" ".$count_of_positive_adult_answers_A." (Threshold - 5)",array(),array());
        

$textrun->addTextBreak(2); 
        break;
    case 9:
       $textrun->addImage('Treshold5/GradientBar8.jpg' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_A." (Threshold - 5)",array(),array());
$textrun->addTextBreak(2); 
        break;
}
else:
    $textrun->addText("No data.");
    $textrun->addTextBreak(2); 
endif;

//switch for DSM* "A", adult hyperactivity/Impulsivity subset A2
if(isset($count_of_positive_adult_answers_H)):
    switch ($count_of_positive_adult_answers_H) {
        case 0:
            $textrun->addImage('Treshold5/GradientBar0.jpg' , array('width' => 135, 'height' => 10));
            $textrun->addText(" ".$count_of_positive_adult_answers_H." (Threshold - 5)");
            $textrun->addTextBreak(2); 
             break;
        case 1:
           $textrun->addImage('Treshold5/GradientBar1.jpg' , array('width' => 135, 'height' => 10));
           $textrun->addText(" ".$count_of_positive_adult_answers_H." (Threshold - 5)");
           $textrun->addTextBreak(2); 
            break;
        case 2:
           $textrun->addImage('Treshold5/GradientBar2.jpg' , array('width' => 135, 'height' => 10));
           $textrun->addText(" ".$count_of_positive_adult_answers_H." (Threshold - 5)");
           $textrun->addTextBreak(2); 
            break;
        case 3:
           $textrun->addImage('Treshold5/GradientBar3.jpg' , array('width' => 135, 'height' => 10));
           $textrun->addText(" ".$count_of_positive_adult_answers_H." (Threshold - 5)");
           $textrun->addTextBreak(2); 
            break;
        case 4:
           $textrun->addImage('Treshold5/GradientBar4.jpg' , array('width' => 135, 'height' => 10));
           $textrun->addText(" ".$count_of_positive_adult_answers_H." (Threshold - 5)");
    $textrun->addTextBreak(2); 
            break;
        case 5:
           $textrun->addImage('Treshold5/GradientBar5.jpg' , array('width' => 135, 'height' => 10));
           $textrun->addText(" ".$count_of_positive_adult_answers_H." (Threshold - 5)");
    $textrun->addTextBreak(2); 
            break;
        case 6:
           $textrun->addImage('Treshold5/GradientBar6.jpg' , array('width' => 135, 'height' => 10));
           $textrun->addText(" ".$count_of_positive_adult_answers_H." (Threshold - 5)");
    $textrun->addTextBreak(2); 
            break;
        case 7:
           $textrun->addImage('Treshold5/GradientBar7.jpg' , array('width' => 135, 'height' => 10));
           $textrun->addText(" ".$count_of_positive_adult_answers_H." (Threshold - 5)");
    $textrun->addTextBreak(2); 
            break;
        case 8:
            
            $textrun->addImage('Treshold5/GradientBar8.jpg' , array('width' => 135, 'height' => 10));
            $textrun->addText(" ".$count_of_positive_adult_answers_H." (Threshold - 5)",array(),array());
            
    
    $textrun->addTextBreak(2); 
            break;
        case 9:
           $textrun->addImage('Treshold5/GradientBar8.jpg' , array('width' => 135, 'height' => 10));
           $textrun->addText(" ".$count_of_positive_adult_answers_H." (Threshold - 5)",array(),array());
    $textrun->addTextBreak(2); 
            break;
    }
    else:
        $textrun->addText("No data.");
        $textrun->addTextBreak(2); 
    endif;
//conditional for DSM* "B", lifelong pattern
if($_POST['tab2_tr2'] == 'yes'){
    $textrun->addImage('true.png' , array('width' => 50, 'height' => 10));
    $textrun->addTextBreak(2);

}
elseif($_POST['tab2_tr2']=='no'){
    $textrun->addImage('false.png' , array('width' => 50, 'height' => 10));
    $textrun->addText(" (".$_POST['crit_b_input'].")");
$textrun->addTextBreak(2); 

}
else{
    $textrun->addText("No data.");
    $textrun->addTextBreak(2); 

    }
//switch for DSM* "C" AND "D", childhood subset
if(isset($count_of_positive_child_answers_C)):
switch ($count_of_positive_child_answers_C) {
    case 0:
        $textrun->addImage('Treshold2/GradientBar0.png' , array('width' => 135, 'height' => 10));
        $textrun->addText(" ".$count_of_positive_child_answers_C." ( Threshold - 2)");
        $textrun->addTextBreak(2); 
         break;
    case 1:
       $textrun->addImage('Treshold2/GradientBar1.png' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_child_answers_C." ( Threshold - 2)");
       $textrun->addTextBreak(2); 
        break;
    case 2:
       $textrun->addImage('Treshold2/GradientBar2.png' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_child_answers_C." ( Threshold - 2)");
       $textrun->addTextBreak(2); 
        break;
    case 3:
       $textrun->addImage('Treshold2/GradientBar3.png' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_child_answers_C." ( Threshold - 2)");
       $textrun->addTextBreak(2); 
        break;
    case 4:
       $textrun->addImage('Treshold2/GradientBar4.png' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_child_answers_C." ( Threshold - 2)");
$textrun->addTextBreak(2); 
        break;
    case 5:
       $textrun->addImage('Treshold2/GradientBar5.png' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_child_answers_C." ( Threshold - 2)");
$textrun->addTextBreak(2); 
        break;
}
else:
    $textrun->addText("No data.");
    $textrun->addTextBreak(2); 
endif;
//switch for DSM* "C" AND "D", adult subset
if(isset($count_of_positive_adult_answers_C)):
switch ($count_of_positive_adult_answers_C) {
    case 0:
        $textrun->addImage('Treshold2/GradientBar0.png' , array('width' => 135, 'height' => 10));
        $textrun->addText(" ".$count_of_positive_child_answers_C." ( Threshold - 2)");
        $textrun->addTextBreak(2); 
         break;
    case 1:
       $textrun->addImage('Treshold2/GradientBar1.png' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_C." ( Threshold - 2)");
       $textrun->addTextBreak(2); 
        break;
    case 2:
       $textrun->addImage('Treshold2/GradientBar2.png' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_C." ( Threshold - 2)");
       $textrun->addTextBreak(2); 
        break;
    case 3:
       $textrun->addImage('Treshold2/GradientBar3.png' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_C." ( Threshold - 2)");
       $textrun->addTextBreak(2); 
        break;
    case 4:
       $textrun->addImage('Treshold2/GradientBar4.png' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_C." ( Threshold - 2)");
$textrun->addTextBreak(2); 
        break;
    case 5:
       $textrun->addImage('Treshold2/GradientBar5.png' , array('width' => 135, 'height' => 10));
       $textrun->addText(" ".$count_of_positive_adult_answers_C." ( Threshold - 2)");
$textrun->addTextBreak(2); 
        break;
}
else:
    $textrun->addText("No data.");
    $textrun->addTextBreak(2); 
endif;

if($count_of_positive_child_answers_C >1 && $count_of_positive_adult_answers_C >1){
    $textrun->addImage('true.png' , array('width' => 50, 'height' => 10 ));
$textrun->addTextBreak(2); 
}
else{
    $textrun->addImage('false.png' , array('width' => 50, 'height' => 10));
    $textrun->addTextBreak(2); 
}
if($_POST['tab2_tr4']=='yes'){
    $textrun->addImage('true.png' , array('width' => 50, 'height' => 10));
    $textrun->addTextBreak(2); 
}
elseif($_POST['tab2_tr4'] == 'no'){
    $textrun->addImage('false.png' , array('width' => 50, 'height' => 10 ));
    $textrun->addTextBreak(2); 
}
else{

    $textrun->addText("No data.");
    $textrun->addTextBreak(2); 

}
$section = $phpWord->addSection(array('breakType' => 'continuous'));
$section->addTextBreak(1);
$section->addText('Keys:', array('alignment' => 'left'), array());
$section->addText('DSM*- DSM-5 Criterion;', array('alignment' => 'left'), array());
$textrun = $section->addTextRun();
$textrun->addImage('true.png' , array('width' => 20, 'height' => 10 ));
$textrun->addText("  - equal or exceeding the threshold; ");
$textrun->addTextBreak(1);
$textrun->addImage('yellow_square.jpg' , array('width' => 20, 'height' => 10));
$textrun->addText("  - threshold");
$textrun->addTextBreak(1);
$textrun->addImage('false.png' , array('width' => 20, 'height' => 10));
$textrun->addText("  - under the threshold or inconclusive values DSM 5  ");
$textrun->addTextBreak(1);
$textrun->addImage('blue_square.png' , array('width' => 20, 'height' => 10));
$textrun->addText("  - Non-relational (absolute) values;");
$textrun->addTextBreak(2);
$section->addText('General Examination of the Profile', array('bold' => true, 'alignment' =>'left'));
if($_POST['tab2_tr6_row1'] == 'yes'){
$section->addText("The DSM-5 diagnostic criteria for ADHD have been met. This implies positive
identification of symptoms' intensity and their life-cycle timing equal or beyond the required thresholds
as per official tests' guidelines. The main issues indicative for the ADHD are at scales related to
Hyperactivity/Impulsivity and/or attentional deficits. Specific information about the areas that are
elevated can be obtained from examining the subscale descriptions. Please note that the clinical
examination can override the formal tests' results.");
}
elseif($_POST['tab2_tr6_row1'] == 'no'){
$section->addText("The DSM-5 diagnostic criteria for ADHD have not been met. This implies no positive
identification of symptoms' intensity and their life-cycle timing equal or beyond the required thresholds
as per official tests' guidelines. The main issues indicative for the ADHD are at scales related to
Hyperactivity/Impulsivity and/or attentional deficits. Specific information about the areas that are
elevated can be obtained from examining the subscale descriptions. Please note that the clinical
examination can override the formal tests' results.");
}
else{
   
    $section->addText("No data.");
  

}
$section = $phpWord->addSection();
$section->addText('Summary of problem areas', array('bold' => true, 'alignment' => 'center', 'size' => 12), array() );
$section->addText("The following is a list of ".$patient_name."'s representative problem areas.");
$fancyTableStyle = array('borderSize' => 10, 'width' => '1000px' , 'borderColor' => '000000', 'cellMargin' => 80);



$fancyTableFontStyle = array('bold' => true, 'color'=>'FFFFFF');

$table = $section->addTable('second_table');
$phpWord->addTableStyle('second_table',array('borderSize' => 10, 'width' => '1000px' , 'borderColor' => '000000', 'cellMargin' => 80), array());
$table->addRow(300);
$table->addCell(3000,array('valign' => 'center'))->addText('Main area', array('bold'=>true , 'size' => 12, 'color' =>'000000' ));
$table->addCell(7000, array('valign' => 'center'))->addText('Example of highly probable problem issues usually related to the Main area:',  array('bold'=>true , 'size' => 12, 'color' =>'000000'));
$table->addRow(300);
$table->addCell()->addText('Work/education');
$customAddCell = $table->addCell();
//т.к. нет возможности передать и строку с названием проблемы, и результат (yes no), я дал имена инпутам по аббревиатуре (расшифровка при объявлении массивов subArray). Каждому инпуту должна соотвтестовать строка с проблемой - я реализовал это с помощью конструкции switch case ниже.
for($i=0;$i<count($subArrayC1);$i++){
    switch ($subArrayC1[$i]) {
        case 'p3c1_i1':
            $customAddCell->addText('Did not complete education/training needed for work');
            
            break;
        
        case 'p3c1_i2':
            $customAddCell->addText('Work below level of education');
            
            break;
        
        case 'p3c1_i3':
            $customAddCell->addText('Tire quickly of a workplace');
            
            break;
        
        case 'p3c1_i4':
            $customAddCell->addText('Pattern of many short-lasting jobs');
            
            break;
        
        case 'p3c1_i5':
            $customAddCell->addText('Difficulty with administrative work/planning');
            
            break;
        
        case 'p3c1_i6':
            $customAddCell->addText('Not achieving promotions');
            
            break;
        
        case 'p3c1_i7':
            $customAddCell->addText('Under-performing at work');
            
            break;
        
        case 'p3c1_i8':
            $customAddCell->addText('Left work following arguments or dismissal');
            
            break;
        
        case 'p3c1_i9':
            $customAddCell->addText('Sickness benefits/disability benefit as a result of symptoms');
            
            break;
        
        case 'p3c1_i10':
            $customAddCell->addText('Limited impairment through compensation of high IQ');
            
            break;
        
        case 'p3c1_i11':
            $customAddCell->addText('Limited impairment through compensation of external structure');
            
            break;
        }
    
}
$table->addRow(300);
$table->addCell()->addText('Relationship and/or family');
$customAddCell2 = $table->addCell();
for($i=0;$i<count($subArrayC2);$i++){
    switch ($subArrayC2[$i]) {
        case 'p3c3_i1':
            $customAddCell2->addText('Tire quickly of relationships');
            
            break;
        
        case 'p3c3_i2':
            $customAddCell2->addText('Impulsively commencing/ending relationships');
            
            break;
        
        case 'p3c3_i3':
            $customAddCell2->addText('Unequal partner relationship owing to symptoms');
            
            break;
        
        case 'p3c3_i4':
            $customAddCell2->addText('Relationship problems, lots of arguments, lack of intimacy');
            
            break;
        
        case 'p3c3_i5':
            $customAddCell2->addText('Divorced owing to symptoms');
            
            break;
        
        case 'p3c3_i6':
            $customAddCell2->addText('Problems with sexuality as a result of symptoms');
            
            break;
        
        case 'p3c3_i7':
            $customAddCell2->addText('Problems with upbringing as a result of symptoms');
            
            break;
        
        case 'p3c3_i8':
            $customAddCell2->addText('Difficulty with housekeeping and/or administration');
            
            break;
        
        case 'p3c3_i9':
            $customAddCell2->addText('Financial problems or gambling');
            
            break;
        
        case 'p3c3_i10':
            $customAddCell2->addText('Not daring to start a relationship');
            
            break;
        
        
        }
    
}

$table->addRow(300);
$table->addCell(array('boderSize'=>10))->addText('Social contacts');
$customAddCell3 = $table->addCell();
for($i=0;$i<count($subArrayC3);$i++){
    switch ($subArrayC3[$i]) {
        case 'p3c5_i1':
            $customAddCell3->addText('Tire quickly of social contacts');
            
            break;
        
        case 'p3c5_i2':
            $customAddCell3->addText('Difficultly maintaining social contacts');
            
            break;
        
        case 'p3c5_i3':
            $customAddCell3->addText('Conflicts as a result of communication problems');
            
            break;
        
        case 'p3c5_i4':
            $customAddCell3->addText('Difficulty initiating social contacts');
            
            break;
        
        case 'p3c5_i5':
            $customAddCell3->addText('Low self-assertiveness as a result of negative experiences');
            
            break;
        
        case 'p3c5_i6':
            $customAddCell3->addText('Not being attentive (i.e. forget to send a card/ empathising/phoning, etc)');
            
            break;
        
      
        
        }
    
}
$table->addRow(300);
$table->addCell()->addText('Free time / hobby');
$customAddCell4 = $table->addCell();
for($i=0;$i<count($subArrayC4);$i++){
    switch ($subArrayC4[$i]) {
        case 'p3c7_i1':
            $customAddCell4->addText('Unable to relax properly during free time');
            
            break;
        
        case 'p3c7_i2':
            $customAddCell4->addText('Having to play lots of sports in order to relax');
            
            break;
        
        case 'p3c7_i3':
            $customAddCell4->addText('Injuries as a result of excessive sport');
            
            break;
        
        case 'p3c7_i4':
            $customAddCell4->addText('Unable to finish a book or watch a film all the way through');
            
            break;
        
        case 'p3c7_i5':
            $customAddCell4->addText('Being continually busy and therefore becoming overtired');
            
            break;
        
        case 'p3c7_i6':
            $customAddCell4->addText('Tire quickly of hobbies');
            
            break;
        
        case 'p3c7_i7':
            $customAddCell4->addText('Accidents/loss of driving licence as a result of reckless driving behaviour');
            
            break;
        
        case 'p3c7_i8':
            $customAddCell4->addText('Sensation seeking and/or taking too many risks');
            
            break;
        
        case 'p3c7_i9':
            $customAddCell4->addText('Contact with the police/the courts');
            
            break;
        
        case 'p3c7_i10':
            $customAddCell4->addText('Binge eating');
            
            break;
        
        
        }
    
}
$table->addRow(300);
$table->addCell()->addText('Self-confidence / self-image');
$customAddCell5 = $table->addCell();
for($i=0;$i<count($subArrayC5);$i++){
    switch ($subArrayC5[$i]) {
        case 'p3c9_i1':
            $customAddCell5->addText('Uncertainty through negative comments of others');
            
            break;
        
        case 'p3c9_i2':
            $customAddCell5->addText('Fear of failure in terms of starting new things');
            
            break;
        
        case 'p3c9_i3':
            $customAddCell5->addText('Excessive intense reaction to criticism');
            
            break;
        
        case 'p3c9_i4':
            $customAddCell5->addText('Perfectionism');
            
            break;
        
        case 'p3c9_i5':
            $customAddCell5->addText('Distressed by the symptoms of ADHD');
            
            break;
        
        }
    
}
$section->addTextBreak(1);
$section->addText('Data Validity Assessment', array('size' => 12, 'bold' => true, 'alignment' => 'left'), array());
$section->addText('If the findings presented in this assessment contradict those obtainable from other sources of
information, then the reason(s) for the conflicting information should be considered. These findings
should be interpreted and considered together with such reasons.');
$section->addTextBreak(1);
$section->addText('Regarding the possible explanation of any such prospective inconsistency, there is potentially a wide
range of reasons, such as very subjective description of the problems, or existence of behaviour which is
situation specific (such as significant difference in attitude and behavioural patterns at home and at
work).');
$section = $phpWord->addSection();
if(isset($_POST['tab2_tr6_row3'])){
    $first_problem = '314.01 Combined presentation type';
}
if(isset($_POST['tab2_tr6_row4'])){
    $second_problem = '314.00 Predominantly inattentive presentation type';
}
if(isset($_POST['tab2_tr6_row5'])){
    $third_problem = '314.01 Predominantly hyperactive-impulsive presentation type';
}
if(isset($_POST['tab2_tr6_row6'])){
    $fourth_problem = '314.01 Other specified attention-deficit/hyperactivity disorder
    ';
}
if(isset($_POST['tab2_tr6_row7'])){
    $fifth_problem = '314.01 Not specified attention-deficit/hyperactivity disorder';
}
$section->addText('Synopsis of Results', array('bold' => true, 'size' => 12, 'alignment' => 'center'));
if($_POST['tab2_tr6_row1'] == 'yes'){
$section->addText("".$patient_name."`s presentation, history and diagnostic tools interpretation are indicative of the following diagnosis (DSM-5): ");
if(isset($first_problem)){
    $section->addListItem($first_problem);
}
if(isset($second_problem)){
    $section->addListItem($second_problem);
}
if(isset($third_problem)){
    $section->addListItem($third_problem);
}
if(isset($fourth_problem))
{ $section->addListItem($fourth_problem);
    
}
if(isset($fifth_problem)){
    $section->addListItem($fifth_problem);
}
$section->addTextBreak(1);
$section->addText('Treatment Plan', array('bold' => true, 'alignment' => 'left', 'size' => 12));
$section->addText("In accordance with widely accepted guidelines, and as applicable in ".$patient_name."’s individual's circumstances,
the following Treatment Plan elements should be considered: ");
$phpWord->addNumberingStyle(
    'multilevel3',
    array(
        'type' => 'multilevel',
        'levels' => array(
            array('format' => 'decimal', 'text' => '%1.', 'left' => 360, 'hanging' => 360, 'tabPos' => 360),
            array('format' => 'lowerLetter', 'text' => '%2.', 'left' => 720, 'hanging' => 360, 'tabPos' => 720),
        )
    )
);
$section->addListItem('It is important to start with psychoeducation; review ADHD resources, behaviour modification
and skills development.', 0, null, 'multilevel3');
$section->addListItem('Systemic Therapy in order to reduce the accompanying issues (comorbidities), to contain the
ADHD symptoms and ultimately to significantly improve quality of life.', 0, null, 'multilevel3');
$section->addListItem('If Systemic Therapy is not viable for any reason, a course of short-term counselling and
psychoeducation should be started without delay.', 0, null, 'multilevel3');
$section->addListItem('Medication could be considered in some cases following a Psychiatric Assessment, if required.', 0, null, 'multilevel3');

}
else{
    $section->addText("".$patient_name."`s presentation, history and diagnostic tools interpretation are not indicative of the ADHD diagnosis. Further assessment of the symptoms might be applicable.");
}
$section->addTextBreak(1);
if(!empty($_POST['additonal'])){
    $section->addText('Additional Notes',array('bold'=>true,'size'=>12,'alignment' => 'left'),array());
    $section->addText($docx_additional);
    }
$section->addTextBreak(1);
$section->addText('It is always advisable to engage and inform the GP in any health-related problems. We can send a summary to a GP or other specialist, if the client instructs us to proceed with this service.');
$section->addText("If the client experiences a worsening of symptoms or decline in their mental health", array('bold' => true), array());
$section->addText("In case of any severe symptoms or crisis, or any issues out-of-hours, the client should consider calling the emergency services or visit an A and E hospital without delay.");
$section->addTextBreak(1);
$section->addText('Also, Samaritans 24 hours, 7 days a week helpline (tel no. 116123) might be a useful resource in case of crisis.');

$section->addTextBreak(1);
$section->addText('If the client wishes to contact us, they can get in touch on 02081586650 or');
$section->addText('admin@harleypsychiatrists.co.uk.');
$section->addTextBreak(2);
$section->addText('Yours Sincerely,');
$section->addTextBreak(1);
$section->addText($psychologist_name);


//Ниже -- запись данных .docx
$fileName = time()."_".$patient_name.'.docx';
$objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
$objWriter->save('./reports/'.$fileName);


// Ниже -- запись данных в .txt
$fileNameTxt = time()."_".$patient_name.'.txt';
$myfile = fopen('./reports/'.$fileNameTxt, "w");
// для Part 1 
fwrite($myfile, "A1 Adult");
foreach($subArrayA1Adult as $key => $value){
    
    switch ($key) {
        case 'p1a1_adult_i1':
            
            $str = "\r\n Makes careless mistakes: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_adult_i2':
            
            $str = "\r\n Works slowly to avoid mistakes ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_adult_i3':
            
            $str = "\r\n Work is inaccurate: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_adult_i4':
            
            $str = "\r\n Does not read instructions carefully: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_adult_i5':
            
            $str = "\r\n Overlooks or misses details: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_adult_i6':
           
            $str = "\r\n Too much time needed to complete detailed tasks: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_adult_i7':
           
            $str = "\r\n Gets easyly bogged down by details: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_adult_i8':
           
            $str = "\r\n Works too quickly and therefore makes mistakes: ".$value;
           fwrite($myfile, $str);
            break;
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a1Adulthood']);
fwrite($myfile, "\r\nA1 Child");
foreach($subArrayA1Child as $key => $value){
    
    switch ($key) {
        case 'p1a1_child_i1':
            
            $str = "\r\n Careless mistakes in schoolwork: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_child_i2':
            
            $str = "\r\n Mistakes made by not reading questions propertly: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_child_i3':
            
            $str = "\r\n Overlooks or misses details: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_child_i4':
            
            $str = "\r\n Works is inaccurate: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_child_i5':
            
            $str = "\r\n Leaves questions unanswered by not reading them propertly: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_child_i6':
           
            $str = "\r\n Leaves the reverse side of a test unanswered: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_child_i7':
           
            $str = "\r\n Other comment about careless work: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a1_child_i8':
           
            $str = "\r\n Not checking the answers in homework: ".$value;
           fwrite($myfile, $str);
            break;
             
        case 'p1a1_child_i9':
           
            $str = "\r\n Too much time needed to complete detailed tasks: ".$value;
           fwrite($myfile, $str);
            break;
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a1Childhood']);
fwrite($myfile, "\r\nA2 Adult");
foreach($subArrayA2Adult as $key => $value){
    
    switch ($key) {
        case 'p1a2_adult_i1':
            
            $str = "\r\n Not able to keep attention on tasks for long*: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a2_adult_i2':
            
            $str = "\r\n Quickly distracted by own thoughts or associations: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a2_adult_i3':
            
            $str = "\r\n Easily distracted by unrelated thoughts: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a2_adult_i4':
            
            $str = "\r\n Difficulty remaining focused during lectures and/or conversations: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a2_adult_i5':
            
            $str = "\r\n Finds it difficult to watch a film through to the end, or to read a book*: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a2_adult_i6':
           
            $str = "\r\n Quickly becomes bored with things*: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a2_adult_i7':
           
            $str = "\r\n Asks questions about subjects that have already been discussed: ".$value;
           fwrite($myfile, $str);
            break;
        
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a2Adulthood']);
fwrite($myfile, "\r\nA2 Child");
foreach($subArrayA2Child as $key => $value){
    
    switch ($key) {
        case 'p1a2_child_i1':
            
            $str = "\r\n Difficulty keeping attention on schoolwork: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a2_child_i2':
            
            $str = "\r\n Difficulty keeping attention on play*: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a2_child_i3':
            
            $str = "\r\n Difficulty remaining focused during lectures and/or conversations: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a2_child_i4':
            
            $str = "\r\n Easily distracted: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a2_child_i5':
            
            $str = "\r\n Difficulty concentrating*: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a2_child_i6':
           
            $str = "\r\n Needing structure to avoid becoming distracted: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a2_child_i7':
           
            $str = "\r\n Quickly becoming bored of activities*: ".$value;
           fwrite($myfile, $str);
            break;
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a2Childhood']);
fwrite($myfile, "\r\nA3 Adult");
foreach($subArrayA3Adult as $key => $value){
    
    switch ($key) {
        case 'p1a3_adult_i1':
            
            $str = "\r\n Dreamy or preoccupied: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a3_adult_i2':
            
            $str = "\r\n Difficulty concentrating on a conversation: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a3_adult_i3':
            
            $str = "\r\n Afterwards, not knowing what a conversation was about: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a3_adult_i4':
            
            $str = "\r\n Often changing the subject of the conversation: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a3_adult_i5':
            
            $str = "\r\n Others saying that your thoughts are somewhere else: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a3_adult_i6':
           
            $str = "\r\n Mind seems elsewhere, even in the absence of any obvious distraction: ".$value;
           fwrite($myfile, $str);
            break;
        
        
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a3Adulthood']);
fwrite($myfile, "\r\nA3 Child");
foreach($subArrayA3Child as $key => $value){
    
    switch ($key) {
        case 'p1a3_child_i1':
            
            $str = "\r\n Not knowing what parents/teachers have said: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a3_child_i2':
            
            $str = "\r\n Dreamy or preoccupied: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a3_child_i3':
            
            $str = "\r\n Only listening during eye contact or when a voice is raised: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a3_child_i4':
            
            $str = "\r\n Mind seems elsewhere, even in the absence of any obvious distraction: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a3_child_i5':
            
            $str = "\r\n Often having to be addressed again: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a3_child_i6':
           
            $str = "\r\n Questions having to be repeated: ".$value;
           fwrite($myfile, $str);
            break;
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a3Childhood']);

fwrite($myfile, "\r\nA4 Adult");
foreach($subArrayA4Adult as $key => $value){
    
    switch ($key) {
        case 'p1a4_adult_i1':
            
            $str = "\r\n Does things that are muddled up together without completing them: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a4_adult_i2':
            
            $str = "\r\n Starts tasks but quickly loses focus and is easily sidetracked: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a4_adult_i3':
            
            $str = "\r\n Needing a time limit to complete tasks: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a4_adult_i4':
            
            $str = "\r\n Difficulty completing administrative tasks: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a4_adult_i5':
            
            $str = "\r\n Difficultly following instructions from a manual: ".$value;
           fwrite($myfile, $str);
            break;
        
        
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a4Adulthood']);
fwrite($myfile, "\r\nA4 Child");
foreach($subArrayA4Child as $key => $value){
    
    switch ($key) {
        case 'p1a4_child_i1':
            
            $str = "\r\n Difficulty following instructions: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a4_child_i2':
            
            $str = "\r\n Difficulty with instructions involving more than one step: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a4_child_i3':
            
            $str = "\r\n Starts tasks but quickly loses focus and is easily sidetracked: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a4_child_i4':
            
            $str = "\r\n Not completing things: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a4_child_i5':
            
            $str = "\r\n Not completing homework or handing it in: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a4_child_i6':
           
            $str = "\r\n Needing a lot of structure in order to complete tasks: ".$value;
           fwrite($myfile, $str);
            break;
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a4Childhood']);
fwrite($myfile, "\r\nA5 Adult");
foreach($subArrayA5Adult as $key => $value){
    
    switch ($key) {
        case 'p1a5_adult_i1':
            
            $str = "\r\n Difficultly with planning activities of daily life: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a5_adult_i2':
            
            $str = "\r\n Difficulty managing sequential tasks: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a5_adult_i3':
            
            $str = "\r\n House and/or workplace are disorganised: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a5_adult_i4':
            
            $str = "\r\n Difficulty keeping materials and belongings in order: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a5_adult_i5':
            
            $str = "\r\n Works messy and disorganized: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a5_adult_i6':
            
            $str = "\r\n Planning too many tasks or non-efficient planning: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a5_adult_i7':
            
            $str = "\r\n Regularly booking things to take place at the same time (double-booking): ".$value;
           fwrite($myfile, $str);
            break;        
        case 'p1a5_adult_i8':
            
            $str = "\r\n Arriving late: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a5_adult_i9':
            
            $str = "\r\n Fails to meet deadlines: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a5_adult_i10':
            
            $str = "\r\n Not able to use an agenda or diary consistently: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a5_adult_i11':
            
            $str = "\r\n Inflexible because of the need to keep to schedules: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a5_adult_i12':
            
            $str = "\r\n Poor sense and management of time: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a5_adult_i13':
            
            $str = "\r\n Creating schedules but not using them: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a5_adult_i14':
            
            $str = "\r\n Needing other people to structure things: ".$value;
           fwrite($myfile, $str);
            break;
        
        
        
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a5Adulthood']);
fwrite($myfile, "\r\nA5 Child");
foreach($subArrayA5Child as $key => $value){
    
    switch ($key) {
        case 'p1a5_child_i1':
            
            $str = "\r\n Difficultly being ready on time: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a5_child_i2':
            
            $str = "\r\n Messy room / desk and/or work: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a5_child_i3':
            
            $str = "\r\n Difficulty keeping materials and belongings in order: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a5_child_i4':
            
            $str = "\r\n Difficultly playing alone: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a5_child_i5':
            
            $str = "\r\n Difficulty planning tasks or homework: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a5_child_i6':
           
            $str = "\r\n Fails to meet deadlines: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a5_child_i7':
            
            $str = "\r\n Doing things in a muddled way: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a5_child_i8':
            
            $str = "\r\n Arriving late: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a5_child_i9':
            
            $str = "\r\n Poor sense of time: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a5_child_i10':
           
            $str = "\r\n Difficulty keeping himself/herself entertained: ".$value;
           fwrite($myfile, $str);
            break;    
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a5Childhood']);
fwrite($myfile, "\r\nA6 Adult");
foreach($subArrayA6Adult as $key => $value){
    
    switch ($key) {
        case 'p1a6_adult_i1':
            
            $str = "\r\n Do the easiest or nicest things first of all: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a6_adult_i2':
            
            $str = "\r\n Often postpone boring or difficult tasks: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a6_adult_i3':
            
            $str = "\r\n Postpone tasks so that deadlines are missed: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a6_adult_i4':
            
            $str = "\r\n Avoid monotonous work, such as administration: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a6_adult_i5':
            
            $str = "\r\n Avoids preparing reports, completing forms, or reviewing lengthy papers: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a6_adult_i6':
            
            $str = "\r\n Do not like reading due to mental effort: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a6_adult_i7':
            
            $str = "\r\n Avoidance of tasks that require a lot of concentration: ".$value;
           fwrite($myfile, $str);
            break;    
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a6Adulthood']);
fwrite($myfile, "\r\nA6 Child");
foreach($subArrayA6Child as $key => $value){
    
    switch ($key) {
        case 'p1a6_child_i1':
            
            $str = "\r\n Avoidance of homework or has an aversion to this: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a6_child_i2':
            
            $str = "\r\n Reads few books or does not feel like reading due to mental effort: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a6_child_i3':
            
            $str = "\r\n Avoidance of tasks that require a lot of concentration: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a6_child_i4':
            
            $str = "\r\n Aversion to school subjects that require a lot of concentration: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a6_child_i5':
            
            $str = "\r\n Often postpones boring or difficult tasks: ".$value;
           fwrite($myfile, $str);
            break;
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a6Childhood']);
fwrite($myfile, "\r\nA7 Adult");
foreach($subArrayA7Adult as $key => $value){
    
    switch ($key) {
        case 'p1a7_adult_i1':
            
            $str = "\r\n Mislays tools, paperwork, eyeglasses, mobile telephones, wallet, keys, or agenda: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a7_adult_i2':
            
            $str = "\r\n Often leaves things behind: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a7_adult_i3':
            
            $str = "\r\n Loses papers for work: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a7_adult_i4':
            
            $str = "\r\n Loses a lot of time searching for things: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a7_adult_i5':
            
            $str = "\r\n Avoids preparing reports, completing forms, or reviewing lengthy papers: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a7_adult_i6':
            
            $str = "\r\n Gets in a panic if other people move things around: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a7_adult_i7':
            
            $str = "\r\n Stores things away in the wrong place: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a7_adult_i8':
            
            $str = "\r\n Loses notes, lists or telephone numbers: ".$value;
           fwrite($myfile, $str);
            break;    
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a7Adulthood']);
fwrite($myfile, "\r\nA7 Child");
foreach($subArrayA7Child as $key => $value){
    
    switch ($key) {
        case 'p1a7_child_i1':
            
            $str = "\r\n Loses school materials, pencils, books, or other items: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a7_child_i2':
            
            $str = "\r\n Mislays toys, clothing, or homework: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a7_child_i3':
            
            $str = "\r\n Spends a lot of time searching for things: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a7_child_i4':
            
            $str = "\r\n Gets in a panic if other people move things around: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a7_child_i5':
            
            $str = "\r\n Comments from parents and/or teacher about things being lost: ".$value;
           fwrite($myfile, $str);
            break;
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a7Childhood']);
fwrite($myfile, "\r\nA8 Adult");
foreach($subArrayA8Adult as $key => $value){
    
    switch ($key) {
        case 'p1a8_adult_i1':
            
            $str = "\r\n Difficulty shutting off from external stimuli: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a8_adult_i2':
            
            $str = "\r\n After being distracted, difficult to pick up the thread again: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a8_adult_i3':
            
            $str = "\r\n Easily distracted by noises or events: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a8_adult_i4':
            
            $str = "\r\n Easily distracted by the conversations of others: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a8_adult_i5':
            
            $str = "\r\n Difficulty in filtering and/or selecting information: ".$value;
           fwrite($myfile, $str);
            break;
       
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a8Adulthood']);
fwrite($myfile, "\r\nA8 Child");
foreach($subArrayA8Child as $key => $value){
    
    switch ($key) {
        case 'p1a8_child_i1':
            
            $str = "\r\n In the classroom, often looking outside: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a8_child_i2':
            
            $str = "\r\n Easily distracted by noises or events: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a8_child_i3':
            
            $str = "\r\n After being distracted, has difficultly picking up the thread again: ".$value;
           fwrite($myfile, $str);
            break;
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a8Childhood']);
fwrite($myfile, "\r\nA9 Adult");
foreach($subArrayA9Adult as $key => $value){
    
    switch ($key) {
        case 'p1a9_adult_i1':
            
            $str = "\r\n Forgets appointments or other obligations: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a9_adult_i2':
            
            $str = "\r\n Forgets keys, agenda etc.: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a9_adult_i3':
            
            $str = "\r\n Needs frequent reminders for appointments: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a9_adult_i4':
            
            $str = "\r\n Forgets to pay bills or to return calls: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a9_adult_i5':
            
            $str = "\r\n Returning home to fetch forgotten things: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p1a9_adult_i6':
            
            $str = "\r\n Rigid use of lists to make sure things aren’t forgotten: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a9_adult_i7':
            
            $str = "\r\n Forgets to keep or look at daily agenda: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a9_adult_i8':
            
            $str = "\r\n Forgets to do chores or run errands: ".$value;
           fwrite($myfile, $str);
            break;    
       
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a9Adulthood']);
fwrite($myfile, "\r\nA9 Child");
foreach($subArrayA9Child as $key => $value){
    
    switch ($key) {
        case 'p1a9_child_i1':
            
            $str = "\r\n Forgets appointments or instructions: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a9_child_i2':
            
            $str = "\r\n Forgets to do chores or run errands: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a9_child_i3':
            
            $str = "\r\n Has to be frequently reminded of things: ".$value;
           fwrite($myfile, $str);
            break;
         case 'p1a9_child_i4':
            
            $str = "\r\n Half-way through a task, forgetting what has to be done: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a9_child_i5':
            
            $str = "\r\n Forgets to take things to school: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p1a9_child_i6':
            
            $str = "\r\n Leaving things behind at school or at friends’ houses: ".$value;
           fwrite($myfile, $str);
            break;    
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['a9Childhood']);

//для Part 2
fwrite($myfile, "\r\nH/I 1 Adult");
foreach($subArrayH1Adult as $key => $value){
    
    switch ($key) {
        case 'p2h1_adult_i1':
            
            $str = "\r\n Difficulty sitting still: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h1_adult_i2':
            
            $str = "\r\n Fidgets with the legs ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h1_adult_i3':
            
            $str = "\r\n Tapping with a pen or playing with something: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h1_adult_i4':
            
            $str = "\r\n Fiddling with hair or biting nails: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h1_adult_i5':
            
            $str = "\r\n Able to control restlessness, but feels stressed as a result: ".$value;
           fwrite($myfile, $str);
            break;
        
      
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h1Adulthood']);
fwrite($myfile, "\r\nH/I 1 Child");
foreach($subArrayH1Child as $key => $value){
    
    switch ($key) {
        case 'p2h1_child_i1':
            
            $str = "\r\n Parents often said “sit still” or similar: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h1_child_i2':
            
            $str = "\r\n Fidgets with the legs: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h1_child_i3':
            
            $str = "\r\n Tapping with a pen or playing with something: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h1_child_i4':
            
            $str = "\r\n Fiddling with hair or biting nails: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h1_child_i5':
            
            $str = "\r\n Able to control restlessness, but feels stressed as a result: ".$value;
           fwrite($myfile, $str);
            break;
        
       
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h1Childhood']);
fwrite($myfile, "\r\nH/I 2 Adult");
foreach($subArrayH2Adult as $key => $value){
    
    switch ($key) {
        case 'p2h2_adult_i1':
            
            $str = "\r\n Often leaves his/her place in the office or in the workplace: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h2_adult_i2':
            
            $str = "\r\n Avoids symposiums, lectures, church etc: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h2_adult_i3':
            
            $str = "\r\n Prefers to walk around rather than sit: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h2_adult_i4':
            
            $str = "\r\n Never sits still for long, always moving around: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h2_adult_i5':
            
            $str = "\r\n Stressed owing to the difficulty of sitting still: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h2_adult_i6':
           
            $str = "\r\n Makes excuses in order to be able to walk around: ".$value;
           fwrite($myfile, $str);
            break;
        
        
        
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h2Adulthood']);
fwrite($myfile, "\r\nH/I 2 Child");
foreach($subArrayH2Child as $key => $value){
    
    switch ($key) {
        case 'p2h2_child_i1':
            
            $str = "\r\n Parents often said “sit still” or similar: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h2_child_i2':
            
            $str = "\r\n Fidgets with the legs: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h2_child_i3':
            
            $str = "\r\n Tapping with a pen or playing with something: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h2_child_i4':
            
            $str = "\r\n Fiddling with hair or biting nails: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h2_child_i5':
            
            $str = "\r\n Able to control restlessness, but feels stressed as a result: ".$value;
           fwrite($myfile, $str);
            break;
        
       
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h2Childhood']);
fwrite($myfile, "\r\nH/I 3 Adult");
foreach($subArrayH3Adult as $key => $value){
    
    switch ($key) {
        case 'p2h3_adult_i1':
            
            $str = "\r\n Feeling restless or agitated inside: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h3_adult_i2':
            
            $str = "\r\n Constantly having the feeling that you have to be doing something: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h3_adult_i3':
            
            $str = "\r\n Finding it hard to relax: ".$value;
           fwrite($myfile, $str);
            break;
        
       
        
        
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h3Adulthood']);
fwrite($myfile, "\r\nH/I 3 Child");
foreach($subArrayH3Child as $key => $value){
    
    switch ($key) {
        case 'p2h3_child_i1':
            
            $str = "\r\n Always running around where it is inappropriate: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h3_child_i2':
            
            $str = "\r\n Climbing on furniture, or jumping on the sofa: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h3_child_i3':
            
            $str = "\r\n Climbing in trees: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h3_child_i4':
            
            $str = "\r\n Feeling restless insides: ".$value;
           fwrite($myfile, $str);
            break;
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h3Childhood']);

fwrite($myfile, "\r\nH/I 4 Adult");
foreach($subArrayH4Adult as $key => $value){
    
    switch ($key) {
        case 'p2h4_adult_i1':
            
            $str = "\r\n Talks during activities when this is not appropriate: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h4_adult_i2':
            
            $str = "\r\n Becoming quickly too cocky in public: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h4_adult_i3':
            
            $str = "\r\n Being loud in all kinds of situations: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h4_adult_i4':
            
            $str = "\r\n Difficulty doing activities quietly: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h4_adult_i5':
            
            $str = "\r\n Difficultly in speaking softly: ".$value;
           fwrite($myfile, $str);
            break;
        
        
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h4Adulthood']);
fwrite($myfile, "\r\nH/I 4 Child");
foreach($subArrayH4Child as $key => $value){
    
    switch ($key) {
        case 'p2h4_child_i1':
            
            $str = "\r\n Being loud-spoken during play or in the classroom: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h4_child_i2':
            
            $str = "\r\n Climbing on furniture, or jumping on the sofa: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h4_child_i3':
            
            $str = "\r\n Unable to watch TV or films quietly: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h4_child_i4':
            
            $str = "\r\n Asked to be quieter or calm down: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h4_child_i5':
            
            $str = "\r\n Becoming quickly too cocky in public: ".$value;
           fwrite($myfile, $str);
            break;
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h4Childhood']);
fwrite($myfile, "\r\nH/I 5 Adult");
foreach($subArrayH5Adult as $key => $value){
    
    switch ($key) {
        case 'p2h5_adult_i1':
            
            $str = "\r\n Always busy doing something: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h5_adult_i2':
            
            $str = "\r\n Is uncomfortable being still for extended time, e.g. in restaurants or meetings: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h5_adult_i3':
            
            $str = "\r\n Has too much energy, always on the move: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h5_adult_i4':
            
            $str = "\r\n Others find you restless or difficult to keep up with: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h5_adult_i5':
            
            $str = "\r\n Stepping over own boundaries: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p2h5_adult_i6':
            
            $str = "\r\n Finds it difficult to let things go, excessively driven: ".$value;
           fwrite($myfile, $str);
            break; 
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h5Adulthood']);
fwrite($myfile, "\r\nH/I 5 Child");
foreach($subArrayH5Child as $key => $value){
    
    switch ($key) {
        case 'p2h5_child_i1':
            
            $str = "\r\n Constantly busy: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h5_child_i2':
            
            $str = "\r\n Others find you restless or difficult to keep up with: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h5_child_i3':
            
            $str = "\r\n Is uncomfortable being still for extended time: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h5_child_i4':
            
            $str = "\r\n Excessively active at school and at home: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h5_child_i5':
            
            $str = "\r\n Has lots of energy: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h5_child_i6':
           
            $str = "\r\n Always on the go, excessively driven: ".$value;
           fwrite($myfile, $str);
            break;

        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h5Childhood']);
fwrite($myfile, "\r\nH/I 6 Adult");
foreach($subArrayH6Adult as $key => $value){
    
    switch ($key) {
        case 'p2h6_adult_i1':
            
            $str = "\r\n So busy talking that other people find it tiring: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h6_adult_i2':
            
            $str = "\r\n Known to be an incessant talker: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h6_adult_i3':
            
            $str = "\r\n Finds it difficult to stop talking: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h6_adult_i4':
            
            $str = "\r\n Tendency to talk too much: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h6_adult_i5':
            
            $str = "\r\n Do not like reading due to mental effort: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p2h6_adult_i6':
            
            $str = "\r\n Not giving others room to interject during a conversation: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p2h6_adult_i7':
            
            $str = "\r\n Needing a lot of words to say something: ".$value;
           fwrite($myfile, $str);
            break;    
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h6Adulthood']);
fwrite($myfile, "\r\nH/I 6 Child");
foreach($subArrayH6Child as $key => $value){
    
    switch ($key) {
        case 'p2h6_child_i1':
            
            $str = "\r\n Known as a chatterbox: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h6_child_i2':
            
            $str = "\r\n Teachers and parents often ask you to be quiet: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h6_child_i3':
            
            $str = "\r\n Is uncomfortable being still for extended time: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h6_child_i4':
            
            $str = "\r\n Comments in school reports about talking too much: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h6_child_i5':
            
            $str = "\r\n Being punished for talking too much: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p2h6_child_i6':
            
            $str = "\r\n Keeping others from doing schoolwork by talking too much: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p2h6_child_i7':
            
            $str = "\r\n Not giving others room during a conversation: ".$value;
           fwrite($myfile, $str);
            break;        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h6Childhood']);
fwrite($myfile, "\r\nH/I 7 Adult");
foreach($subArrayH7Adult as $key => $value){
    
    switch ($key) {
        case 'p2h7_adult_i1':
            
            $str = "\r\n Being a blabbermouth, saying what you think: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h7_adult_i2':
            
            $str = "\r\n Saying things without thinking first: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h7_adult_i3':
            
            $str = "\r\n Giving people answers before they have finished speaking: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h7_adult_i4':
            
            $str = "\r\n Completing other people’s sentences: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p2h7_adult_i5':
            
            $str = "\r\n Being tactless: ".$value;
           fwrite($myfile, $str);
            break;    
        
       
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h7Adulthood']);
fwrite($myfile, "\r\nH/I 7 Child");
foreach($subArrayH7Child as $key => $value){
    
    switch ($key) {
        case 'p2h7_child_i1':
            
            $str = "\r\n Being a blabbermouth, saying things without thinking first: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h7_child_i2':
            
            $str = "\r\n Wants to be the first to answer questions at school: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h7_child_i3':
            
            $str = "\r\n Blurts out an answer even if it is wrong: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h7_child_i4':
            
            $str = "\r\n Interrupts others before sentences are finished: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h7_child_i5':
            
            $str = "\r\n Difficulty waiting for turn during conversations: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p2h7_child_i6':
            
            $str = "\r\n Coming across as being tactless: ".$value;
           fwrite($myfile, $str);
            break;    
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h7Childhood']);
fwrite($myfile, "\r\nH/I 8 Adult");
foreach($subArrayH8Adult as $key => $value){
    
    switch ($key) {
        case 'p2h8_adult_i1':
            
            $str = "\r\n Difficulty waiting in a queue, jumping the queue: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h8_adult_i2':
            
            $str = "\r\n Difficulty in patiently waiting in the traffic/traffic jams: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h8_adult_i3':
            
            $str = "\r\n Being impatient: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h8_adult_i4':
            
            $str = "\r\n Quickly starting relationships/jobs, or ending/leaving these because of impatience: ".$value;
           fwrite($myfile, $str);
            break;
        
        
       
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h8Adulthood']);
fwrite($myfile, "\r\nH/I 8 Child");
foreach($subArrayH8Child as $key => $value){
    
    switch ($key) {
        case 'p2h8_child_i1':
            
            $str = "\r\n Difficultly waiting turn in group activities: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h8_child_i2':
            
            $str = "\r\n Difficultly waiting turn in the classroom: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h8_child_i3':
            
            $str = "\r\n Always being the first to talk or act: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p2h8_child_i4':
            
            $str = "\r\n Becomes quickly impatient: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h8_child_i5':
            
            $str = "\r\n Difficulty waiting for turn during conversations: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h8_child_i6':
            
            $str = "\r\n Crosses the road without looking: ".$value;
           fwrite($myfile, $str);
            break;    
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h8Childhood']);
fwrite($myfile, "\r\nH/I 9 Adult");
foreach($subArrayH9Adult as $key => $value){
    
    switch ($key) {
        case 'p2h9_adult_i1':
            
            $str = "\r\n Being quick to interfere with others: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h9_adult_i2':
            
            $str = "\r\n Intrudes on others: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h9_adult_i3':
            
            $str = "\r\n Disturbs other people’s activities without being asked, or takes over their tasks: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h9_adult_i4':
            
            $str = "\r\n Comments from others about interference: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h9_adult_i5':
            
            $str = "\r\n Difficulty respecting the boundaries of others: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p2h9_adult_i6':
            
            $str = "\r\n Comments from others about interference: ".$value;
           fwrite($myfile, $str);
            break;
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h9Adulthood']);
fwrite($myfile, "\r\nH/I 9 Child");
foreach($subArrayH9Child as $key => $value){
    
    switch ($key) {
        case 'p2h9_child_i1':
            
            $str = "\r\n Interrupts the games or activities of others: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h9_child_i2':
            
            $str = "\r\n Starts using people’s things without asking or permission: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h9_child_i3':
            
            $str = "\r\n Interrupts the conversations of others: ".$value;
           fwrite($myfile, $str);
            break;
         case 'p2h9_child_i4':
            
            $str = "\r\n Reacts to everything: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p2h9_child_i5':
            
            $str = "\r\n Unable to wait: ".$value;
           fwrite($myfile, $str);
            break;
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['h9Childhood']);
//для Part 3
fwrite($myfile, "\r\nCriterion B");
$str = "\r\n Have you always had these symptoms of attention deficit and/or hyperactivity/impulsivity? -- ".$_POST['crit_b_other'];
fwrite($myfile, $str);
if($_POST['crit_b_other'] == 'no'){
    $str = "\r\n  If no is answered above, starting as from ".$_POST['crit_b_input']." year of age";
    fwrite($myfile, $str);
}

         
fwrite($myfile, "\r\nС1 Adult");
foreach($subArrayC1Adult as $key => $value){
    
    switch ($key) {
        case 'p3c1_i1':
            
            $str = "\r\n Did not complete education/training needed for work: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c1_i2':
            
            $str = "\r\n Work below level of education: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c1_i3':
            
            $str = "\r\n Tire quickly of a workplace: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c1_i4':
            
            $str = "\r\n Pattern of many short-lasting jobs: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c1_i5':
            
            $str = "\r\n Difficulty with administrative work/planning: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c1_i6':
            
            $str = "\r\n Not achieving promotions: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c1_i7':
            
            $str = "\r\n Under-performing at work: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c1_i8':
            
            $str = "\r\n Left work following arguments or dismissal: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c1_i9':
            
            $str = "\r\n Sickness benefits/disability benefit as a result of symptoms: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c1_i10':
            
            $str = "\r\n Limited impairment through compensation of high IQ: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c1_i11':
            
            $str = "\r\n Limited impairment through compensation of external structure: ".$value;
           fwrite($myfile, $str);
            break;    
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['c1Adulthood']);
fwrite($myfile, "\r\nC1 Child");
foreach($subArrayC1Child as $key => $value){
    
    switch ($key) {
        case 'p3c2_i1':
            
            $str = "\r\n Lower educational level than expected based on IQ: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c2_i2':
            
            $str = "\r\n Staying back (repeating classes) as a result of concentration problems: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c2_i3':
            
            $str = "\r\n Education not completed / rejected from school: ".$value;
           fwrite($myfile, $str);
            break;
         case 'p3c2_i4':
            
            $str = "\r\n Took much longer to complete education than usual: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c2_i5':
            
            $str = "\r\n Achieved education suited to IQ with a lot of effort: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c2_i6':
            
            $str = "\r\n Difficulty doing homework: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c2_i7':
            
            $str = "\r\n Followed special education on account of symptoms: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c2_i8':
            
            $str = "\r\n Comments from teachers about behaviour or concentration: ".$value;
           fwrite($myfile, $str);
            break;
         case 'p3c2_i9':
            
            $str = "\r\n Limited impairment through compensation of high IQ: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c2_i10':
            
            $str = "\r\n Limited impairment through compensation of external structure: ".$value;
           fwrite($myfile, $str);
            break;
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['c1Childhood']);
fwrite($myfile, "\r\nС2 Adult");
foreach($subArrayC2Adult as $key => $value){
    
    switch ($key) {
        case 'p3c3_i1':
            
            $str = "\r\n Tire quickly of relationships: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c3_i2':
            
            $str = "\r\n Impulsively commencing/ending relationships: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c3_i3':
            
            $str = "\r\n Unequal partner relationship owing to symptoms: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c3_i4':
            
            $str = "\r\n Relationship problems, lots of arguments, lack of intimacy: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c3_i5':
            
            $str = "\r\n Divorced owing to symptoms: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c3_i6':
            
            $str = "\r\n Problems with sexuality as a result of symptoms: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c3_i7':
            
            $str = "\r\n Problems with upbringing as a result of symptoms: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c3_i8':
            
            $str = "\r\n Difficulty with housekeeping and/or administration: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c3_i9':
            
            $str = "\r\n Financial problems or gambling: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c3_i10':
            
            $str = "\r\n Not daring to start a relationship: ".$value;
           fwrite($myfile, $str);
            break;   
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['c2Adulthood']);
fwrite($myfile, "\r\nC2 Child");
foreach($subArrayC2Child as $key => $value){
    
    switch ($key) {
        case 'p3c4_i1':
            
            $str = "\r\n Frequent arguments with brothers or sisters: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c4_i2':
            
            $str = "\r\n Frequent punishment or hiding: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c4_i3':
            
            $str = "\r\n Little contact with family on account of conflicts: ".$value;
           fwrite($myfile, $str);
            break;
         case 'p3c4_i4':
            
            $str = "\r\n Required structure from parents for a longer period than would normally be the case: ".$value;
           fwrite($myfile, $str);
            break;
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['c2Childhood']);
fwrite($myfile, "\r\nС3 Adult");
foreach($subArrayC3Adult as $key => $value){
    
    switch ($key) {
        case 'p3c5_i1':
            
            $str = "\r\n Tire quickly of social contacts: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c5_i2':
            
            $str = "\r\n Difficultly maintaining social contacts: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c5_i3':
            
            $str = "\r\n Conflicts as a result of communication problems: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c5_i4':
            
            $str = "\r\n Difficulty initiating social contacts: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c5_i5':
            
            $str = "\r\n Low self-assertiveness as a result of negative experiences: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c5_i6':
            
            $str = "\r\n Not being attentive (i.e. forget to send a card/ empathising/phoning, etc): ".$value;
           fwrite($myfile, $str);
            break;
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['c3Adulthood']);
fwrite($myfile, "\r\nC3 Child");
foreach($subArrayC3Child as $key => $value){
    
    switch ($key) {
        case 'p3c6_i1':
            
            $str = "\r\n Difficultly maintaining social contacts: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c6_i2':
            
            $str = "\r\n Conflicts as a result of communication problems: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c6_i3':
            
            $str = "\r\n Difficultly entering into social contacts: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c6_i4':
            
            $str = "\r\n Low self-assertiveness as a result of negative experiences: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c6_i5':
            
            $str = "\r\n Few friends: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c6_i6':
            
            $str = "\r\n Being teased: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c6_i7':
            
            $str = "\r\n Shut out by, or not being allowed, to do things with a group: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c6_i8':
            
            $str = "\r\n Being a bully: ".$value;
           fwrite($myfile, $str);
            break;    
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['c3Childhood']);
fwrite($myfile, "\r\nС4 Adult");
foreach($subArrayC4Adult as $key => $value){
    
    switch ($key) {
        case 'p3c7_i1':
            
            $str = "\r\n Unable to relax properly during free time: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c7_i2':
            
            $str = "\r\n Having to play lots of sports in order to relax: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c7_i3':
            
            $str = "\r\n Injuries as a result of excessive sport: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c7_i4':
            
            $str = "\r\n Unable to finish a book or watch a film all the way through: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c7_i5':
            
            $str = "\r\n Being continually busy and therefore becoming overtired: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c7_i6':
            
            $str = "\r\n Tire quickly of hobbies: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c7_i7':
            
            $str = "\r\n Accidents/loss of driving licence as a result of reckless driving behaviour: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c7_i8':
            
            $str = "\r\n Sensation seeking and/or taking too many risks: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c7_i9':
            
            $str = "\r\n Contact with the police/the courtsd: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c7_i10':
            
            $str = "\r\n Binge eating: ".$value;
           fwrite($myfile, $str);
            break;    
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['c4Adulthood']);
fwrite($myfile, "\r\nC4 Child");
foreach($subArrayC4Child as $key => $value){
    
    switch ($key) {
        case 'p3c8_i1':
            
            $str = "\r\n Unable to relax properly during free time: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c8_i2':
            
            $str = "\r\n Having to play lots of sport to be able to relax: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c8_i3':
            
            $str = "\r\n Injuries as a result of excessive sport: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c8_i4':
            
            $str = "\r\n Unable to finish a book or watch a film all the way through: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c8_i5':
            
            $str = "\r\n Being continually busy and therefore becoming overtired: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c8_i6':
            
            $str = "\r\n Tired quickly of hobbies: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c8_i7':
            
            $str = "\r\n Sensation seeking and/or taking too many risks: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c8_i8':
            
            $str = "\r\n Contact with the police/courts: ".$value;
           fwrite($myfile, $str);
            break;    
        case 'p3c8_i9':
            
            $str = "\r\n Increased number of accidents: ".$value;
           fwrite($myfile, $str);
            break;        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['c4Childhood']);
fwrite($myfile, "\r\nС5 Adult");
foreach($subArrayC5Adult as $key => $value){
    
    switch ($key) {
        case 'p3c9_i1':
            $str = "\r\n Uncertainty through negative comments of others: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c9_i2':
            
            $str = "\r\n Fear of failure in terms of starting new things: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c9_i3':
            
            $str = "\r\n Excessive intense reaction to criticism: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c9_i4':
            
            $str = "\r\n Perfectionism: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c9_i5':
            
            $str = "\r\n Distressed by the symptoms of ADHD: ".$value;
           fwrite($myfile, $str);
            break;
        
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['c5Adulthood']);
fwrite($myfile, "\r\nC5 Child");
foreach($subArrayC5Child as $key => $value){
    
    switch ($key) {
        case 'p3c10_i1':
            
            $str = "\r\n Uncertainty through negative comments of others: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c10_i2':
            
            $str = "\r\n Negative self-image due to experiences of failure: ".$value;
           fwrite($myfile, $str);
            break;
        
        case 'p3c10_i3':
            
            $str = "\r\n Fear of failure in terms of starting new things: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c10_i4':
            
            $str = "\r\n Excessive intense reaction to criticism: ".$value;
           fwrite($myfile, $str);
            break;
        case 'p3c10_i5':
            
            $str = "\r\n Perfectionism: ".$value;
           fwrite($myfile, $str);
            break;
        }
    
}
fwrite($myfile, "\r\n Symptom present? - ".$_POST['c5Childhood']);
fwrite($myfile, "\r\n");
fwrite($myfile, "\r\n                Summary table");
fwrite($myfile, "\r\nAdult A");
for($i=0;$i<9;$i++){
    fwrite($myfile, "\r\n".$symptomesA[$i]."  --  ".$adultAnswersA[$i]); 

}
fwrite($myfile, "\r\nTotal number of criteria Attention Deficit:       ".$count_of_positive_adult_answers_A."/9"); 
fwrite($myfile, "\r\nChild A");
for($i=0;$i<9;$i++){
    fwrite($myfile, "\r\n".$symptomesA[$i]."  --  ".$childAnswersA[$i]); 

}
fwrite($myfile, "\r\nTotal number of criteria Attention Deficit:       ".$count_of_positive_child_answers_A."/9"); 

fwrite($myfile, "\r\nAdult H/I");
for($i=0;$i<9;$i++){
    fwrite($myfile, "\r\n".$symptomesH[$i]."  --  ".$adultAnswersH[$i]); 

}
fwrite($myfile, "\r\nTotal number of criteria Hyperactivity/Impulsivity:       ".$count_of_positive_adult_answers_H."/9"); 
fwrite($myfile, "\r\nChild H/I");
for($i=0;$i<9;$i++){
    fwrite($myfile, "\r\n".$symptomesH[$i]."  --  ".$childAnswersH[$i]); 

}
fwrite($myfile, "\r\nTotal number of criteria Hyperactivity/Impulsivity:       ".$count_of_positive_child_answers_H."/9");

fwrite($myfile, "\r\n");
fwrite($myfile, "\r\nScore form");
fwrite($myfile, "\r\nDSM-5 criterion A (ADHD symptoms)");
fwrite($myfile, "\r\n Childhood");
fwrite($myfile, "\r\n  Are several (3 or more) symptoms present of A and/or HI? -- ".$_POST['tab2_tr1_childhood']);
fwrite($myfile, "\r\n Adulthood");
fwrite($myfile, "\r\n  Is the number of A characteristics ≥ 5? -- ".$_POST['tab2_tr1_adulthood_a']);
fwrite($myfile, "\r\n  Is the number of H/I characteristics ≥ 5? -- ".$_POST['tab2_tr1_adulthood_h']);
fwrite($myfile, "\r\nDSM-5 criterion B (age of onset)");
fwrite($myfile, "\r\n Are there signs of a lifelong pattern of symptoms, starting before the 12th year of age? -- ".$_POST['tab2_tr2']);
fwrite($myfile, "\r\nDSM-5 criterion C (pervasiveness) AND Criterion D (impairment)");
fwrite($myfile, "\r\n The symptoms and the impairment are expressed in at least two domains of functioning");
fwrite($myfile, "\r\n  Adulthood -- ".$_POST['tab2_tr3_row1']);
fwrite($myfile, "\r\n  Childhood -- ".$_POST['tab2_tr3_row2']);
fwrite($myfile, "\r\nDSM-5 criterion C (pervasiveness) AND Criterion D (impairment)");
fwrite($myfile, "\r\n The symptoms cannot be (better) explained by the presence of another psychiatric disorder -- ".$_POST['tab2_tr4']);
fwrite($myfile, "\r\n Is the diagnosis supported by collateral information?" );
fwrite($myfile, "\r\n  Parent(s)/brother/sister/other, i.e. ".$_POST['in_table_tinput1']." -- ".$_POST['tab2_tr5_row1']);
fwrite($myfile, "\r\n  Partner/good friend/other, i.e. ".$_POST['in_table_tinput2']." -- ".$_POST['tab2_tr5_row2']);
fwrite($myfile, "\r\n  School reports  -- ".$_POST['tab2_tr5_row3']);
if($_POST['tab2_tr6_row1'] == 'no'){
    fwrite($myfile, "\r\n  Diagnosis ADHD**  -- ".$_POST['tab2_tr6_row1']);
}
elseif($_POST['tab2_tr6_row1'] == 'yes'){
    fwrite($myfile, "\r\n  Diagnosis ADHD**  -- ".$_POST['tab2_tr6_row1']);
    fwrite($myfile, "\r\n   Including Items: ");
    if($_POST['tab2_tr6_row3'] == "yes"){
        fwrite($myfile, "\r\n   -- 314.01 Combined presentation type ");
    }
    if($_POST['tab2_tr6_row4'] == "yes"){
        fwrite($myfile, "\r\n   -- 314.00 Predominantly inattentive presentation type ");
    }
    if($_POST['tab2_tr6_row5'] == "yes"){
        fwrite($myfile, "\r\n   -- 314.01 Predominantly hyperactive-impulsive presentation type ");
    }
    if($_POST['tab2_tr6_row6'] == "yes"){
        fwrite($myfile, "\r\n   -- 314.01 Other specified attention-deficit/hyperactivity disorder ");
    }
    if($_POST['tab2_tr6_row7'] == "yes"){
        fwrite($myfile, "\r\n   -- 314.01 Not specified attention-deficit/hyperactivity disorder");
    }
   
   
}
fwrite($myfile, "\r\n  Severity  --  ".$_POST['severite_level']);

if(!empty($_POST['additonal'])){
    fwrite($myfile, "\r\nAdditional:");
    fwrite($myfile, "\r\n ".$txt_additional);
}


$docxFile['file_name'] = $fileName;
$data['docx_file'] = $docxFile;
$txtFile['file_name'] = $fileNameTxt;
$data['txt_file']=$txtFile;
$data['patient_name'] = $patient_name;
$data['date'] = date("Y-m-d H:i:s");

// $data[0] = $fileName;
// $data[1] = $fileNameTxt;

// echo $data;
echo json_encode($data);


?>