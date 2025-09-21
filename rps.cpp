#include <string>
#include <iostream>
#include <cstdlib>

using namespace std;
 extern "C" {
    const char* play(int player,int computer) {
        if (player == computer) {
            return "It's a tie!";
        } else if ((player == 0 && computer == 2) ||
                   (player == 1 && computer == 0) ||
                   (player == 2 && computer == 1)) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }
 }