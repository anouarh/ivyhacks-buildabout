import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.FileWriter;

public class javapythonmain {
    public static void main(String[] args) {
        String projDesc1 = "This project uses a saw, a screwdriver, a hammer, a few nails, and some wood";
        String projDesc2 = "This project uses a breadboard, jumper wires, a battery and some LEDs";
        String projDesc3 = "This project uses some cardboard, a sharpie marker, and maybe a little bit of glue";
        String[] projDescArr = {projDesc1, projDesc2, projDesc3};
        int numProj = projDescArr.length;

        String[] tools_and_mats = {"saw", "nail", "hammer", "wood", "cardboard"};
        int numTM = tools_and_mats.length;

        try {
            FileWriter myFile = new FileWriter("proj.txt");
            for(int i = 0; i < numProj; i++) {
                myFile.write(projDescArr[i]);
                myFile.write("\n;;;\n");
            }
            myFile.close();
        }
        catch(IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        try {
            FileWriter myFile = new FileWriter("tm.txt");
            for(int i = 0; i < numTM; i++) {
                myFile.write(tools_and_mats[i]);
                myFile.write("\n;;;\n");
            }
            myFile.close();
        }
        catch(IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        try {
			Process process = Runtime.getRuntime().exec("python search.py");
			StringBuilder output = new StringBuilder();
			BufferedReader reader = new BufferedReader(new InputStreamReader (process.getInputStream()));
			String line;
			
			while((line = reader.readLine()) != null) {
				output.append(line + "\n");
			}
			
			int exitVal = process.waitFor();
			if(exitVal == 0) {
				System.out.println(output);
				System.exit(0);
            }
            else {
				System.out.println("Unknown error");
			}
				
        }
        catch(IOException e) {
			e.printStackTrace();
        }
        catch(InterruptedException e) {
			e.printStackTrace();
		}
    }
}