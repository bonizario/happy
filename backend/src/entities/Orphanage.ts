import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orphanage')
class Orphanage {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public name: string;

  @Column()
  public latitude: string;

  @Column()
  public longitude: number;

  @Column()
  public about: string;

  @Column()
  public instructions: string;

  @Column()
  public opening_hours: string;

  @Column()
  public open_on_weekends: boolean;
}

export default Orphanage;
