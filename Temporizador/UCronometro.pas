unit UCronometro;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.Buttons, Vcl.MPlayer, Vcl.StdCtrls,
  Vcl.ExtCtrls;

type
  TForm1 = class(TForm)
    Timer: TTimer;
    label_minutos: TLabel;
    label_doisp: TLabel;
    label_segundos: TLabel;
    MediaPlayer1: TMediaPlayer;
    SpeedButton1: TSpeedButton;
    LabelTeste: TLabel;
    procedure TimerTimer(Sender: TObject);
    procedure SpeedButton1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

procedure TForm1.SpeedButton1Click(Sender: TObject);
begin

if Timer.Enabled = False then
  begin
    Timer.Enabled := True;
  end
  else
  begin
    Timer.Enabled := False;
  end;


end;

procedure TForm1.TimerTimer(Sender: TObject);
var segundos, minutos, i, contadorMin: Integer;
begin
  segundos:= StrToInt(label_segundos.Caption);
  minutos := StrToInt(label_minutos.Caption);
  i := segundos+1;
  label_segundos.Caption := IntToStr(i);

  if label_segundos.Caption = '60' then
   begin
   contadorMin := minutos + 1;
   label_minutos.Caption := IntToStr(contadorMin);

   segundos := 0;
   label_segundos.Caption := IntToStr(segundos);

   end;
end;

end.
