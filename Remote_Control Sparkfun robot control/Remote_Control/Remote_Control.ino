#include <RedBot.h>
#include <RedBotSoftwareSerial.h>


RedBotMotors motors;

     
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
int ch5; // Far left switch
int ch6; // Far right switch
String ch5String;
String ch6String;
int led;
int leftMotorInt;
int rightMotorInt;

void setup() {

  pinMode(A1, INPUT); // Set our input pins as such
  pinMode(A2, INPUT);
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A5, INPUT);
  pinMode(A6, INPUT);
  pinMode(A0, OUTPUT);

  
//  pinMode('leftMotorPin', OUTPUT); //Analog out pin for the motor control
//  pinMode('rightMotorPin', OUTPUT); //Analog out pin for the motor control
  Serial.begin(154400); 

}


//Baasic input control's getting data from the main channels of the 
//joysticks and converting them to a useable interger for functionality.
void loop() {
  ch1 = pulseIn(A1, HIGH); // Read the pulse width of 
  ch2 = pulseIn(A2, HIGH); // each channel
  ch3 = pulseIn(A3, HIGH);
  ch4 = pulseIn(A4, HIGH);
  ch5 = pulseIn(A5, HIGH);
  ch6 = pulseIn(A6, HIGH);
  
  
  ch1 = (ch1 /100) - 14; //Rounding the channel input to a -5 - 5 scale for easy of use
  ch2 = (ch2 /100) - 14; //Joystick control reading
  ch3 = (ch3 /100) - 14; 
  ch4 = (ch4 /100) - 14;
//  if(ch5 < 1000){//Channel 5 on off switch conversion
//      ch5String = "OFF";
//    }
//    else{
//      ch5String = "ON";
//    }
//  if(ch6 < 1000){//Channel 6 on off switch conversion
//      ch6String = "OFF";
//    }
//    else{
//      ch6String = "ON";
//    }
  
  
  //test();
  motorControl();

}

//Function for moving the robot around via the controller
void motorControl() {
    leftMotorInt = ch3 * 50;
    rightMotorInt = ch3 * 50;
    motors.leftMotor(leftMotorInt);
    motors.rightMotor(rightMotorInt);
   

    if (ch4 < 0){ //Turn left
      leftMotorInt = ch4 * -50; //Inside wheel powered by amount of throtle given, allows for tighter or slacker turning.
      rightMotorInt = ch4 * 50; //Power outside wheel the amount you wish to turn.
      motors.leftMotor(leftMotorInt);
      motors.rightMotor(rightMotorInt);
    }
    else{ //Turn Right
      leftMotorInt = ch4 * 50; //Power the outside wheel the amount you wish to turn.
      rightMotorInt = ch4 * -50; //Inside whjeel powered by amount of throtle given, allows for tights or slacker turning.
      motors.leftMotor(leftMotorInt);
      motors.rightMotor(rightMotorInt);
    }
}
