     
/*
 RC PulseIn Serial Read out
 By: Nick Poole
 SparkFun Electronics
 Date: 5
 License: CC-BY SA 3.0 - Creative commons share-alike 3.0
 use this code however you'd like, just keep this license and
 attribute. Let me know if you make hugely, awesome, great changes.
 */
 
int ch1; // 
int ch2; //
int ch3; // Left stick Forward Backwards
int ch4; // Left stick Left and Right
int led;
int leftMotor;
int rightMotor;

void setup() {

  pinMode(A1, INPUT); // Set our input pins as such
  pinMode(A2, INPUT);
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A0, OUTPUT);

  pinMode(A6, OUTPUT);
  pinMode(A7, OUTPUT);
//  pinMode('leftMotorPin', OUTPUT); //Analog out pin for the motor control
//  pinMode('rightMotorPin', OUTPUT); //Analog out pin for the motor control
  Serial.begin(9600); 

}


//Baasic input control's getting data from the main channels of the 
//joysticks and converting them to a useable interger for functionality.
void loop() {
  ch1 = pulseIn(A1, HIGH); // Read the pulse width of 
  ch2 = pulseIn(A2, HIGH); // each channel
  ch3 = pulseIn(A3, HIGH);
  ch4 = pulseIn(A4, HIGH);
  
  ch1 = (ch1 /100) - 9; //Rounding the channel input to a -5 - 5 scale for easy of use
  ch2 = (ch2 /100) - 9;
  ch3 = (ch3 /100) - 14; 
  ch4 = (ch4 /100) - 14;
   
  //test();
  //motorControl();
  printing();
}

//Simple logs to console window of the input from controller
void printing() {
  Serial.print("Channel 1:"); // Print the value of 
  Serial.println(ch1);        // each channel

  Serial.print("Channel 2:");
  Serial.println(ch2);

  Serial.print("Channel 3:");
  Serial.println(ch3);
  
  Serial.print("Channel 4:");
  Serial.println(ch4);

  delay(200); 
}

//Function for moving the robot around via the controller
void motorControl() {
    leftMotor = ch3 * 50;
    rightMotor = ch3 * 50;
    analogWrite('leftMotorPin', leftMotor);
    analogWrite('rightMotorPin', rightMotor);

    if (ch4 < 0){ //Turn left
      leftMotor = ch3 * 50; //Inside wheel powered by amount of throtle given, allows for tighter or slacker turning.
      rightMotor = ch4 * 50; //Power outside wheel the amount you wish to turn.
      analogWrite('leftMotorPin', leftMotor);
      analogWrite('rightMotorPin', rightMotor);
    }
    else if (ch4 > 0){ //Turn Right
      leftMotor = ch4 * 50; //Power the outside wheel the amount you wish to turn.
      rightMotor = ch3 * 50; //Inside wheel powered by amount of throtle given, allows for tights or slacker turning.
      analogWrite('leftMotorPin', leftMotor);
      analogWrite('rightMotorPin', rightMotor);
    }
}

void test(){
  if (ch3 > 5){
    analogWrite(A6, 255);
    analogWrite(A7, 255);
  }
  else {
     analogWrite(A6, 155);
    analogWrite(A7, 150);
    }
  }
