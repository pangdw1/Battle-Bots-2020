     
/*
 RC PulseIn Serial Read out
 By: Nick Poole
 SparkFun Electronics
 Date: 5
 License: CC-BY SA 3.0 - Creative commons share-alike 3.0
 use this code however you'd like, just keep this license and
 attribute. Let me know if you make hugely, awesome, great changes.
 */
 
int ch1; // Here's where we'll keep our channel values
int ch2;
int ch3;
int ch4;
int led;

void setup() {

  pinMode(A1, INPUT); // Set our input pins as such
  pinMode(A2, INPUT);
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A0, OUTPUT);
  Serial.begin(9600); 

}

void loop() {

  ch1 = pulseIn(A1, HIGH); // Read the pulse width of 
  ch2 = pulseIn(A2, HIGH); // each channel
  ch3 = pulseIn(A3, HIGH);
  ch4 = pulseIn(A4, HIGH);
  
  ch1 = (ch1 /100) - 9; //Rounding the channel input to a 0-10 scale for easy of use
  ch2 = (ch2 /100) - 9;
  ch3 = (ch3 /100) - 9;
  ch4 = (ch4 /100) - 9;
  
  led = ch3 * 40; 
  
  Serial.print("Channel 1:"); // Print the value of 
  Serial.println(ch1);        // each channel

  Serial.print("Channel 2:");
  Serial.println(ch2);

  Serial.print("Channel 3:");
  Serial.println(ch3);
  analogWrite(A0,led);
  
  Serial.print("Channel 4:");
  Serial.println(ch4);

  delay(200); // I put this here just to make the terminal 
              // window happier
}
