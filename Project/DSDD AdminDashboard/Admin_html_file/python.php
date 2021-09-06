<?php
                $command = escapeshellcmd('C:\Users\iPrince\Desktop\web_scrapper.py');
                $output = shell_exec($command);
                echo $output;
?>