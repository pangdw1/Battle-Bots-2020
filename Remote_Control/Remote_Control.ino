     
/*
 RC PulseIn Serial Read out
 By: Nick Poole
 SparkFun Electronics
 Date: 5
 License: CC-BY SA 3.0 - Creative commons share-alike 3.0
 use this code however you'd like, just keep this license and
 attribute. Let me know if you make hugely, awesome, great changes.
 */
int trigPin A7; //
int trigPin2 A9; //
int echoPin A8; //
int echoPin2 A10; //
int ch1; // Right stick Forward Backwards
int ch2; // Right stick Left Right
int ch3; // Left stick Forward Backwards
int ch4; // Left stick Left and Right
int ch5; // Far left switch
int ch6; // Far right switch
String ch5String;
String ch6String;
int led;
int leftMotor;
int rightMotor;
long distance, duration;



//Setup pins
void setup() {

  pinMode(A1, INPUT); // Set our input pins as such
  pinMode(A2, INPUT);
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A5, INPUT);
  pinMode(A6, INPUT);
  pinMode(A0, OUTPUT); 
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(trigPin2, OUTPUT);
  pinMode(echoPin2, INPUT);

  
//  pinMode('leftMotorPin', OUTPUT); //Analog out pin for the motor control
//  pinMode('rightMotorPin', OUTPUT); //Analog out pin for the motor control
  Serial.begin(9600); 

}


//Baasic input control's getting data from the main channels of the 
//joysticks  and switchs and converting them to a useable interger for functionality.
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
  if(ch5 < 1000){//Channel 5 on off switch conversion  Switch used for switching between AI mode and maual control
      ch5String = "OFF";
      manualControl(); //Use the manual control method
      Serial.println("Assuming manual control");
    }
    else{
      ch5String = "ON";
      AI(); // Call the AI method
      Serial.println("Assuming Artifical control");
      
    }
  if(ch6 < 1000){//Channel 6 on off switch conversion
      ch6String = "OFF";
    }
    else{ 
      ch6String = "ON";
    }
  
  
  //test();
  //manualControl();
  //printing();
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
  
  Serial.print("Channel 5 Left switch:");
  Serial.println(ch5String);
  
  Serial.print("Channel 6 Right switch:");
  Serial.println(ch6String);

  delay(200); 
}

//Function for moving the robot around via the controller
void manualControl() {
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
      rightMotor = ch3 * 50; //Inside whjeel powered by amount of throtle given, allows for tights or slacker turning.
      analogWrite('leftMotorPin', leftMotor);
      analogWrite('rightMotorPin', rightMotor);
    }
    //servoMovment()
}


//method for basic tersting of controls via remote input
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


//Method for AI.
void AI(){
  //have sensor input make thing do thing, and if thing hapens do other thing whilst killing other thing.
  //Automomasly
  getDistance()
  ReadSensor()

  }
  

//void control() {
//  if switch = ON manualControl = true 
//  if switch = OFF AI = true
//  }
float getDistance()
{
  float echoTime;                   //variable to store the time it takes for a ping to bounce off an object
  float calcualtedDistance;         //variable to store the distance calculated from the echo time
  
  //send out an ultrasonic pulse that's 10ms long
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10); 
  digitalWrite(trigPin, LOW);

  echoTime = pulseIn(echoPin, HIGH);      //use the pulsein command to see how long it takes for the
                                          //pulse to bounce back to the sensor

  calcualtedDistance = echoTime / 148.0;  //calculate the distance of the object that reflected the pulse (half the bounce time multiplied by the speed of sound)
  
  return calcualtedDistance;              //send back the distance that was calculated
}

void readSensor() {
  
}

//Method used for the servo's to move into position.
void servoMovment() {
  //get servo position, '0' for the servo will be in the middle of the servos stroke.
  //They way it will work is that when the sensors detect a forign object, the top turret
  //will lock onto the target, It will know its locked on when the sensor that has found it
  //stays consistantly at the same point, then the motors will turn the base of the robot 
  //to be inline with the target.


//This method is used for detecting IR
void infraRed() {

}